import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an instance of an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) with specified options
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from the specified origin
    credentials: true, // Allow cookies to be sent with requests
  }),
);
// add some configs
// Parse incoming JSON requests with a size limit (Form Data)
app.use(express.json({ limit: "16kb" }));
// Parse URL-encoded data with a size limit (URL Data)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Serve static files from the "public" directory (e.g., images, PDFs, icons)
app.use(express.static("public"));
// Parse cookies attached to the client requests
app.use(express.cookieParser());

// Export the configured Express app instance
export default app;
