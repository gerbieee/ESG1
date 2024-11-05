import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const server = express();

// Middleware
server.use(express.json());
server.use(cors());

// Root endpoint
server.get("/", (_, res) => {
    res.json("good mourning.");
});

// Start the server
const PORT = process.env.PORT || 8080; // Default to 8080 if PORT is not set
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
