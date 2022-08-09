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

//**Take in opportunity, get matching volunteers
///getVolMatches

/* **Return all opportunities
/getOpportunities */
apiRouter.get("/getOpportunities", (req, res) => {
	const opp = new Opportunity(
		req.body.ctrName,
		req.body.category,
		req.body.time
	);
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
