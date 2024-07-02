// Import the asyncHandler utility from the specified path
import { asyncHandler } from "../utils/asyncHandler.js";
// Import the ApiError class for error handling
import { ApiError } from "../utils/ApiError.js";
// Import the User model
import { User } from "../models/user.model.js";
// Import the uploadOnCloudinary utility function
import { uploadOnCloudinary } from "../utils/cloudinary.js";
// Import the ApiResponse class for standardized API responses
import { ApiResponse } from "../utils/ApiResponse.js";

// Define an asynchronous function to handle user registration
const registerUser = asyncHandler(async (req, res) => {
  // Get user details from the frontend request body
  const { username, email, password, fullName } = req.body;
  console.log("Email:", email);

  // Validation: Check if any required field is empty
  if (
    [username, email, password, fullName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if a user with the same username or email already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // Check for uploaded images: avatar and cover image
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Upload avatar to Cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : null;
  if (!avatar) {
    throw new ApiError(400, "Failed to upload avatar");
  }

  // Create a new user object and save it to the database
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    password,
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });

  // Retrieve the created user without the password and refreshToken fields
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  // Check if the user was successfully created
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // Return a success response with the created user data
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

// Export the registerUser function for use in other parts of the application
export default registerUser;
