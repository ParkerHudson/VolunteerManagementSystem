const express = require("express");
const config = require("../config");
const userRouter = express.Router();

var connection = config.connection;

//addUser : add user to DB
userRouter.post("/addUser", (req, res) => {
	const { username, password, isAdmin } = req.body;
	const query = "INSERT INTO user VALUES (?,?,?)";

	connection.execute(query, [username, password, isAdmin], (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.send(results);
		}
	});
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
userRouter.get("/Login", (req, res) => {
	const { username, password } = req.body;

	const query = "SELECT * from user WHERE userID = ?";

	connection.execute(query, [req.body.volId], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

module.exports = userRouter;
