import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.json());
server.use(
	cors({
		origin:
			process.env.ENV !== "production" ? "http://localhost:5173" : "https://cvsu-bacoor.vercel.app",
		methods: ["GET", "POST"],
		credentials: true,
	})
);

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

server.get("/", () => {
	console.log("good mourning.");
});
