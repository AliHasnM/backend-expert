// Import the Router class from Express
import { Router } from "express";
// Import the registerUser controller function
import { registerUser } from "../controllers/user.controller.js";
// Import the upload middleware from multer
import { upload } from "../middlewares/multer.middleware.js";

// Create a new router instance
const router = Router();

// Define a POST route for user registration
// When a POST request is made to /register, the upload middleware handles file uploads
// and then the registerUser function is called
router.route("/register").post(
  upload.fields([
    {
      name: "avatar", // Name of the first field for the avatar image
      maxCount: 1, // Maximum number of files for the avatar field
    },
    {
      name: "coverImage", // Name of the second field for the cover image
      maxCount: 1, // Maximum number of files for the cover image
    },
  ]),
  registerUser, // Controller function to handle the registration logic
);

// Export the router to be used in other parts of the application
export default router;
