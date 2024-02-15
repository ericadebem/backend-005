import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const baseURL = "/app";
const PORT = 5000;

app.use(express.json());
app.use(cors());

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
    } catch (e) {
        console.log("MongoDB connection failed");
    }
    };

    connectDB().then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    );