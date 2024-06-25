// Import the Router class from Express
import { Router } from "express";
// Import the registerUser controller function
import { registerUser } from "../controllers/user.controller.js";

// Create a new router instance
const router = Router();

// Define a POST route for user registration
// When a POST request is made to /register, the registerUser function is called
router.route("/register").post(registerUser);

// Export the router to be used in other parts of the application
export default router;
