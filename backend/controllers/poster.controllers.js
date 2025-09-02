import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import sharp from "sharp"; // ✅ for image resizing

export const createPoster = async (req, res) => {
  try {
    const { title, description } = req.body;
    const apiKey = process.env.STABILITY_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ success: false, message: "Missing Stability API key" });
    }

    if (!req.file || !description) {
      return res.status(400).json({ success: false, message: "Image and description are required" });
    }

    // ✅ Resize uploaded image to 1024x1024 (safe default for SDXL)
    const resizedPath = `${req.file.path}-resized.png`;
    await sharp(req.file.path)
      .resize(1024, 1024, { fit: "cover" }) // crop/fit into 1024x1024
      .toFile(resizedPath);

    // Build FormData (only allowed fields)
    const formData = new FormData();
    formData.append("init_image", fs.createReadStream(resizedPath));
    formData.append("text_prompts[0][text]", description);

    // Send to Stability AI → strength in query string
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

    // 🔍 Handle non-200 responses
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
        message: "Poster generation failed",
        error: parsedError,
      });
    }

    // ✅ Convert image buffer → Base64 → Data URL
    const base64Image = Buffer.from(response.data).toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return res.json({
      success: true,
      poster: {
        title,
        description,
        generatedImageUrl: imageUrl,
      },
    });
  } catch (error) {
    let errMsg = error.message;

    // If API responded with a Buffer, decode it
    if (error.response?.data) {
      try {
        const text = Buffer.from(error.response.data).toString("utf8");
        errMsg = JSON.parse(text);
      } catch (e) {
        errMsg = error.response.data.toString();
      }
    }

    console.error("Poster generation failed:", errMsg);

    return res.status(500).json({
      success: false,
      message: "Poster generation failed",
      error: errMsg,
    });
  }
};
