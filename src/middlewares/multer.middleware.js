import multer from "multer";

// Configure storage settings for multer
const storage = multer.diskStorage({
  // Specify the destination directory for uploaded files
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Save files to the './public/temp' directory
  },
  // Specify the filename for uploaded files
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original name of the file
  },
});

// Create the multer instance with the storage settings
export const upload = multer({ storage }); // Export the configured multer instance
