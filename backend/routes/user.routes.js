import express from "express";
import { signup, login, getUsername } from "../controllers/user.controller.js";

// Create a new router instance
const router = express.Router();

router.route('/signup').post(signup);  //  POST to save/update Signup
router.route('/login').post(login);   //  POST to save/update Login
router.route("/get_username").get(getUsername); // GET to fetch username

export default router;