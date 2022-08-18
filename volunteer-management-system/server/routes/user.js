const express = require("express");
const config = require("../config");
const userRouter = express.Router();
const { signupValidation, loginValidation } = require("../validation");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var connection = config.connection;

//addUser : add user to conn
/* userRouter.post("/registerUser", (req, res) => {
	const { username, password, isAdmin } = req.body;
	const query = "INSERT INTO user VALUES (?,?,?)";

	connection.execute(query, [username, password, isAdmin], (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.send(results);
		}
	});
}); */

userRouter.post("/register", signupValidation, (req, res, next) => {
	connection.query(
		`SELECT * FROM user WHERE LOWER(userId) = LOWER(${connection.escape(
			req.body.userId
		)});`,
		(err, result) => {
			if (err) console.log(err);
			if (result.length) {
				return res.status(409).send({
					msg: "This user is already in use!",
				});
			} else {
				// username is available
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					if (err) {
						return res.status(500).send({
							msg: err,
						});
					} else {
						// has hashed pw => add to database
						connection.query(
							`INSERT INTO user (userId, password, isAdmin) VALUES ('${
								req.body.userId
							}', ${connection.escape(hash)}, '1')`,
							(err, result) => {
								if (err) {
									return res.status(400).send({
										msg: err,
									});
								}
								return res.status(201).send({
									msg: "Registered",
								});
							}
						);
					}
				});
			}
		}
	);
});
//getAllUsers : return all users
userRouter.get("/getUsers", (req, res) => {
	let query = "SELECT * FROM user";
	connection.execute(query, (err, results) => {
		if (err) {
			console.log(err);
			res.send({
				errorCode: err.code,
				errorNum: err.errno,
				message: err.message,
			});
		} else {
			res.send(results);
		}
	});
});

//updateUser : update user information

//login :
/* userRouter.get("/Login", (req, res) => {
	const { username, password } = req.body;

	const query = "SELECT * from user WHERE userID = ?";

	connection.execute(query, [req.body.volId], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
}); */

userRouter.post("/login", loginValidation, (req, res, next) => {
	connection.query(
		`SELECT * FROM user WHERE userId = ${connection.escape(req.body.userId)};`,
		(err, result) => {
			// user does not exists
			if (err) {
				return res.status(400).send({
					msg: err,
				});
			}
			if (!result.length) {
				return res.status(401).send({
					msg: "Username or password is incorrect!",
				});
			}
			// check password
			bcrypt.compare(
				req.body.password,
				result[0]["password"],
				(bErr, bResult) => {
					// wrong password
					if (bErr) {
						return res.status(401).send({
							msg: "Email or password is incorrect!",
						});
					}
					if (bResult) {
						const token = jwt.sign({ id: result[0].username }, "DevOspreys", {
							expiresIn: "1h",
						});

						res.cookie("token", token);
						return res.status(200).send({
							msg: "Logged in!",
							isAuthenticated: true,
							token,
							user: result[0],
						});
					}
					return res.status(401).send({
						msg: "Username or password is incorrect!",
					});
				}
			);
		}
	);
});

//Logout
userRouter.post("/logout", (req, res) => {
	res.clearCookie("token");
	res.json({ loggedOut: "true" });
});

//checkAuth : check if user is authenticated, gives username and token and verifies if token is expired
userRouter.post("/authenticated", (req, res) => {
	const { token, username } = req.body;

	jwt.verify(token, "DevOspreys", (err, results) => {
		if (err) res.send({ isAuthenticated: false });
		else {
			res.send({ isAuthenticated: true });
		}
	});
});

module.exports = userRouter;
