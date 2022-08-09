const express = require("express");
const { useInsertionEffect } = require("react");
const config = require("../config");
const apiRouter = express.Router();
const Opportunity = require("../models/Opportunity");

var connection = config.connection;

//** Takes in username and password. Check login info, and ensure that user is admin. Send error message if not admin.
///login

//**Returns all volunteers
///getVolunteers

//**Take in volunteer ID, return list of matching opportunities
// /getOppMatches
apiRouter.get("/getOppMatches", (req, res) => {
	const query =
		"SELECT * \
		FROM opportunity o, preferredcenter pc \
		WHERE o.ctrName = pc.ctrName and pc.volId = ?;";

	connection.execute(query, [req.body.volId], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//Take in opportunity, get matching volunteers
apiRouter.get("/getVolMatches", (req, res) => {
	const query =
		"SELECT * \
	FROM volunteer v, preferredcenter pc \
	WHERE v.volunteerId = pc.volId and pc.ctrName = ?;";

	connection.execute(query, [req.body.ctrName], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//Return all opportunities in array
apiRouter.get("/getOpportunities", (req, res) => {
	let query = "SELECT * FROM opportunity";
	connection.execute(query, (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//add opportunity to opportunity table
apiRouter.post("/addOpportunity", (req, res) => {
	var testTime = new Date();

	let query = "INSERT INTO opportunity VALUES (NULL, ?, ?, ?)";

	connection.execute(
		query,
		[req.body.ctrName, req.body.category, testTime],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

//deleteOpportunity : Delete opportunity by provided oppID
apiRouter.post("/deleteOpportunity", (req, res) => {
	let query = "DELETE FROM opportunity WHERE oppID = ?";
	connection.execute(query, [req.body.oppID], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//updateOpportunity : Update opportunity by provided oppID
apiRouter.post("/updateOpportunity", (req, res) => {
	let query =
		"UPDATE opportunity SET ctrName = ?, category = ?, time = ? WHERE oppID = ?";
	connection.execute(
		query,
		[req.body.ctrName, req.body.category, req.body.time, req.body.oppID],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});
/* /addVolunteer */

/* /addUser */

/* /deleteUser */

// /deleteVolunteer

/* /updateVolunteer */

/* /updateUser */

/* **Return all centers
/getCenters */

/* ***Optional***
**Give another account admin priv
/addAdmin
/updateCenter
/deleteCenter
/addCenter */

module.exports = apiRouter;
