import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// add some configs
// Form data in json formate
app.use(express.json({ limit: "16kb" })) 
// url data
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// static files like as images, pdfs, icons, etc 
app.use(express.static("public"))
app.use(express.cookieParser())
export default app;
