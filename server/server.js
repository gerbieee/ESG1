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
		origin: ENV !== "production" ? "http://localhost:5173" : "https://cvsu-bacoor.vercel.app",
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

server.listen(8080, () => {
	console.log("Connected to the server.");
});

server.get("/", () => {
	console.log("good mourning.");
});

server.post("/api/register-student-account", async (req, res) => {
	// recieve info from user
	const { email, password } = req.body;

	try {
		// check if email is already used
		const [getAccount] = await db.query(
			`
			SELECT email
			FROM accounts
			WHERE email = ?
			`,
			[email]
		);

		// respond with error
		if (getAccount.length > 0) {
			return res.status(404).json({
				message: "Email address is already used.",
				isEmailAlreadyUsed: true,
			});
		}

		// encrypt password
		const hashedPassword = await bcrypt.hash(password, 8);

		// insert new account to db
		await db.query(
			`
			INSERT INTO accounts (email, password, user_type)
			VALUES (?, ?, ?)
			`,
			[email, hashedPassword, "newStudent"] // values
		);

		// respond with success
		return res.status(200).json({ message: "Account registered." });
	} catch (err) {
		// respond with error
		console.error(err);
		return res.status(500).json({ error: "An error occurred while querying the database." });
	}
});

server.post("/api/sign-in", async (req, res) => {
	// recieve info from user
	const { email, password } = req.body;

	try {
		// check if email matches in db
		const [getAccount] = await db.query(
			`
			SELECT email, password
			FROM accounts
			WHERE email = ?
			`,
			[email]
		);

		// respond with error
		if (getAccount.length === 0) {
			return res.status(404).json({ message: "Invalid sign in credentials." });
		}

		// check if passwords match
		const isPasswordMatched = await bcrypt.compare(password, getAccount[0].password);

		// respond with error
		if (!isPasswordMatched) {
			return res.status(404).json({ message: "Invalid sign in credentials." });
		}

		// respond with sucess
		return res.status(200).json({ message: "Account signed in." });
	} catch (err) {
		// respond with error
		console.error(err);
		return res.status(500).json({ error: "An error occurred while querying the database." });
	}
});
