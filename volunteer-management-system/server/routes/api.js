const express = require("express");
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
	const query = "SELECT * \
		FROM opportunity o, preferredcenter pc \
		WHERE o.ctrName = pc.ctrName and pc.volId = ?;"

	connection.execute(
		query,
		[req.body.volId],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

//**Take in opportunity, get matching volunteers
///getVolMatches
apiRouter.get("/getVolMatches", (req, res) => {
	const query = "SELECT * \
	FROM volunteer v, preferredcenter pc \
	WHERE v.volunteerId = pc.volId and pc.ctrName = ?;"

	connection.execute(
		query,
		[req.body.ctrName],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

/* **Return all opportunities in array
/getOpportunities */
apiRouter.get("/getOpportunities", (req, res) => {
	let query = "SELECT ctrName, category FROM opportunity";
	connection.execute(query, (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});
/* /addOpportunity */
apiRouter.post("/addOpportunity", (req, res) => {
	var testTime = new Date();

	let query = "INSERT INTO opportunity VALUES (?, ?, ?)";

	connection.execute(
		query,
		[req.body.ctrName, req.body.category, testTime],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

/* /deleteOpportunity */

/* /updateOpportunity */

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
