import fs from "fs";
import jwt from "jsonwebtoken";
import axios from "axios";
import FormData from "form-data";
import sharp from "sharp";
import Image from "../models/image.models.js";
import User from "../models/user.models.js";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// --- Configure Cloudinary ---
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const createImage = async (req, res) => {
  try {
    const { title } = req.body;

    const apiKey = process.env.STABILITY_API_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ success: false, message: "Missing Stability API key" });
    }

    if (!req.file || !title) {
      return res
        .status(400)
        .json({ success: false, message: "Title and image are required" });
    }

    const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
    if (!token) throw new Error("No token provided");
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode token

    const user = await User.findById(decoded.id);
    if (!user) throw new Error("Unauthorized user");

    // Resize uploaded image
    const resizedPath = `${req.file.path}-resized.png`;
    await sharp(req.file.path)
      .resize(1024, 1024, { fit: "cover" })
      .toFile(resizedPath);

    // Build FormData for Stability (using title as prompt)
    const formData = new FormData();
    formData.append("init_image", fs.createReadStream(resizedPath));
    formData.append("text_prompts[0][text]", title);

    const response = await axios.post(
      `https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image?strength=0.7`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${apiKey}`,
          Accept: "image/png",
        },
        validateStatus: () => true,
        responseType: "arraybuffer",
      }
    );

    if (response.status !== 200) {
      const errorText = Buffer.from(response.data).toString("utf-8");
      let parsedError;
      
      try {
        parsedError = JSON.parse(errorText);
      } catch {
        parsedError = errorText;
      }

      console.error("Stability API error:", parsedError);

      return res.status(response.status).json({
        success: false,
        message: "Image generation failed",
        error: parsedError,
      });
    }
    // Save the generated image to Cloudinary
    const tempFilePath = `temp-generated-${Date.now()}.png`;
    fs.writeFileSync(tempFilePath, response.data);

    const uploadResult = await cloudinary.uploader.upload(tempFilePath, {
      folder: "ai-generated",
      use_filename: true,
      unique_filename: true,
    });

    fs.unlinkSync(tempFilePath); // delete temp file

    // Convert result to Base64
    const base64Image = Buffer.from(response.data).toString("base64");
    const generatedImageUrl = `data:image/png;base64,${base64Image}`;

    // Save in DB
    const newImage = new Image({
      userId: user._id,
      inputImageUrl: req.file.path,
      generatedImageUrl: uploadResult.secure_url,
      title,
    });

    await newImage.save();

    return res.json({
      success: true,
      image: newImage,
    });
  } catch (error) {
    console.error("Image generation failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Image generation failed",
      error: error.message,
    });
  }
};

export const getImages = async (req, res) => {
  try {

    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token provided" }); 

    const user = await User.findOne({ token });
    if (!user) return res.status(401).json({ message: "Unauthorized user" });

    const imagesData = await Image.find({ userId: user._id });

    // No Goals Found From Database for this user
    if (!imagesData) {
      return res.status(404).json({ message: "No goals found for this user" });
    }

    return res.status(200).json(imagesData);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};