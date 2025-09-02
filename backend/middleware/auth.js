import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // No token? -> just continue (guest mode)
  if (!authHeader) {
    return next();
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user payload (id, email, etc.)
  } catch (err) {
    console.error("JWT verification failed:", err.message);
  }

  next();
};
