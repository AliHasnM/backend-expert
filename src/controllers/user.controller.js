// Import the asyncHandler utility from the specified path
import { asyncHandler } from "../utils/asyncHandler.js";

// Define an asynchronous function to handle user registration
const registerUser = asyncHandler(async (req, res) => {
  // Send a JSON response with status code 200 and a message "OK"
  res.status(200).json({
    message: "User Registered Successfully.",
  });
});

// Export the registerUser function for use in other parts of the application
export default registerUser;
