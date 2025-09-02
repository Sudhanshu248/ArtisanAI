const posterSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  guest: {
    type: Boolean,
    default: true,
  },

  // always provided
  description: { type: String, required: true },

  // always provided
  inputImageUrl: { type: String, required: true },

  // AI-generated or enhanced image
  generatedImageUrl: { type: String, default: '' },

  enhanced: { type: Boolean, default: false },

  title: { type: String, required: true },

  finalDescription: { type: String, default: '' },

  tags: [String],

  createdAt: { type: Date, default: Date.now },
});
