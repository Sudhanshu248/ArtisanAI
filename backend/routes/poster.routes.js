import express from "express";
import multer from "multer";
import { createPoster } from "../controllers/poster.controllers.js";
import { auth } from "../middleware/auth.js";  //import middleware

const router = express.Router();

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });


router.post("/create-poster", auth, upload.single("image"), createPoster);

export default router;
