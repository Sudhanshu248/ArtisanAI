import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import chatbotRoutes from "./routes/chatBot.routes.js"
import imageRoutes from "./routes/image.routes.js";

const app = express();
dotenv.config(); // Load environment variables

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for frontend apps
app.use(cors({
    origin: ['https://artisan-ai-eight.vercel.app/'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// MongoDB connection setup
const dblink = process.env.DB_CONNECT;
const connectDB = async () => {
    try {
        await mongoose.connect(dblink);
        console.log("SuccessFully Mongoose Connected !");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

app.use('/', userRoutes);
app.use("/", chatbotRoutes);
app.use("/api", imageRoutes); 

// Global error handler middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!",
    });
});

app.get("/", (req, res) => {
    res.send("Backend Server is properly working on 8080.");
});

// Start server and connect to database
app.listen(8080, () => {
    console.log("Server is successfully running on 8080 port.");
    connectDB();
});