import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/user.models.js'

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

// Handles user registration
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if required fields are present
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists by email
        const user = await User.findOne({ email }).maxTimeMS(5000);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user document
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });



        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '7d' });  // Token will expire in 7 days //

        newUser.token = token;

        // Save user to database
        await newUser.save({ maxTimeMS: 5000 });

        // Send success response with token
        return res.status(201).json({
            message: "User Created Successfully",
            token
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Handles user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Look up user by email
        const response = await User.findOne({ email });

        if (!response) {
            return res.status(401).send({
                Message: "Invalid email or password"
            });
        }

        // Compare provided password with hashed password in DB
        const passwordmatch = await bcrypt.compare(password, response.password);


        if (passwordmatch) {
            const token = jwt.sign({ id: response._id }, JWT_SECRET, { expiresIn: '7d' });  // Token will expire in 7 days //
            response.token = token;

            await response.save();
            res.json({ token })
        } else {
            return res.status(401).send({
                Message: "Incorrect Password"
            });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getUsername = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Remove "Bearer "
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id); // Use decoded ID to find user

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ username: user.username });
  } catch (e) {
    res.status(500).json({ message: `Something went wrong: ${e.message}` });
  }
};



export { signup, login, getUsername };
