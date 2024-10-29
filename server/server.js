import express from "express";
import cors from "cors";
import mysql from "mysql";

const server = express();

server.use(express.json());
server.use(cors());

server.listen(8080, () => {
	console.log("Connected to the server.");
});

server.post("/api/create-student-account", (req, res) => {
	// info recieved from user
	const {email, password} = req.body;
	
	// query
	const query = `
		INSERT INTO users (email, password, userType)
		VALUES ()
	`;

	// query database
	db.query(query, (err, data) => {
		// if error
		if (err) {
			return res.json(err);
		}

		// send response to user
		return res.json(data);
	});
});