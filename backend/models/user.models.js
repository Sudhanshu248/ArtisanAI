import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: null
  },
  token: {
    type: String,
    default: ""
  },
});

// Create and export the User model
const User = mongoose.model("User", UserSchema);

export default User;

