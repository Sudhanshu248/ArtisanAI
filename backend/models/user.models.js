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
  // picture: {
  //   type: String,
  //   default: "profile.png" 
  // }
});



// Middleware: delete forms when a user is deleted
// UserSchema.pre('findOneAndDelete', async function (next) {
//     const user = await this.model.findOne(this.getFilter());

//     if (user) {
//         await Form.deleteMany({ userId: user._id });
//     }

//     next();
// });

// Create and export the User model
const User = mongoose.model("User", UserSchema);

export default User;

