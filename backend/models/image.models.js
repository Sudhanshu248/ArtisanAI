import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },

  // original input image URL
  inputImageUrl: { 
    type: String,
    required: true 
  },

  // AI-generated or enhanced image
  generatedImageUrl: { 
    type: String,
    default: '' 
  },

  title: {
    type: String,
    required: true 
  },
});

// Create the Image model from the schema
const Image = mongoose.model("Image", imageSchema);

export default Image;