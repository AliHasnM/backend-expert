import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration for Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Cloudinary cloud name from environment variables
  api_key: process.env.CLOUDINARY_API_KEY, // Cloudinary API key from environment variables
  api_secret: process.env.CLOUDINARY_API_SECRET, // Cloudinary API secret from environment variables
});

/**
 * Uploads a file to Cloudinary
 * @param {string} localFilePath - The local path to the file to be uploaded
 * @returns {object|null} - The response from Cloudinary if successful, otherwise null
 */

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null; // Return null if no file path is provided

    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically detect the resource type
    });

    // Log success message with the file URL
    console.log("File is uploaded on cloudinary", response.url);

    return response; // Return the response object from Cloudinary
  } catch (error) {
    // Remove locally saved temporary file as upload operation failed
    fs.unlinkSync(localFilePath);

    return null; // Return null as the upload operation failed
  }
};

export { uploadOnCloudinary };
