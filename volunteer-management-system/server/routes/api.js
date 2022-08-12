const express = require("express");
const config = require("../config");
const apiRouter = express.Router();
const Opportunity = require("../models/Opportunity");
const Volunteer = require("../models/Volunteer");


var connection = config.connection;

//** Takes in username and password. Check login info, and ensure that user is admin. Send error message if not admin.
///login
// WIP Still trying to figure out the authentication

apiRouter.get("/Login", (req, res) => {
	const user = req.body.name;
	const password = req.body.password;
	const query = "SELECT * from user WHERE userID = ?";

	connection.execute(query, [req.body.volId], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//addUser : add user to DB

//updateUser : update user information

//addVolunteer : add volunteer to DB
apiRouter.post("/addVolunteer", (req, res) => {


	let query = "INSERT INTO volunteer VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

	connection.execute(
		query,
		[req.body.firstName, req.body.lastName, req.body.address, req.body.homePhone, req.body.workPhone, req.body.cellPhone, 
			req.body.email, req.body.education, req.body.licenses, req.body.emContactName, req.body.emContactPhone, req.body.emContactEmail, 
			req.body.emContactAddress, req.body.driversLicense, req.body.socialSecurity, req.body.approvalStatus, req.body.skills],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});
//deleteVolunteer : delete volunteer by volunteerId
apiRouter.post("/deleteVolunteer", (req, res) => {
	let query = "DELETE FROM volunteer WHERE volunteerID = ?";
	connection.execute(query, [req.body.volunteerID], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//updateVolunteer : update volunteer by volunteerId
apiRouter.post("/updateVolunteer", (req, res) => {
	let query =
		"UPDATE volunteer SET firstName = ?, lastName = ?, address = ?, homePhone = ?, workPhone = ?, cellPhone = ?, email = ?, education = ?, licenses = ?, emContactName = ?, emContactPhone = ?, emContactEmail = ?, emContactAddress = ?, driversLicense = ?, socialSecurity = ?, approvalStatus = ?, skills = ?,  WHERE volunteerID = ?";
	connection.execute(
		query,
		[req.body.firstName, req.body.lastName, req.body.address, req.body.homePhone, req.body.workPhone, req.body.cellPhone, 
			req.body.email, req.body.education, req.body.licenses, req.body.emContactName, req.body.emContactPhone, req.body.emContactEmail, 
			req.body.emContactAddress, req.body.driversLicense, req.body.socialSecurity, req.body.approvalStatus, req.body.skills, req.body.volunteerID],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

//addPrefCenter : add preferred center pair to DB (params: volunteerID & center)

//getPrefCenter : get array of preferred center for each volunteer by ID

//updatePrefCenter : update preferred center for volunteer given volunteer and center

//deletePrefCenter : delete preferred center pair given volunteerId

//getOppMatches : Take in volunteer ID, return list of matching opportunities
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

//getVolMatches : Take in opportunity, get matching volunteers
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

// getCenters : Return all centers in array
apiRouter.get("/getCenters", (req, res) => {
	let query = "SELECT * FROM center";
	connection.execute(query, (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

// updateCenter : update center by provided ctrName
apiRouter.post("/updateCenter", (req, res) => {
	let query = "UPDATE center SET centerName = ? WHERE centerName = ?";
	connection.execute(
		query,
		[req.body.newCtrName, req.body.currentCtrName],
		(err, results) => {
			if (err) console.log(err);
			res.send(results);
		}
	);
});

// deleteCenter : delete center by provided ctrName
apiRouter.post("/deleteCenter", (req, res) => {
	let query = "DELETE FROM center WHERE centerName = ?";
	connection.execute(query, [req.body.ctrName], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

// addCenter : add center to DB
apiRouter.post("/addCenter", (req, res) => {
	let query = "INSERT INTO center VALUES (?)";

	connection.execute(query, [req.body.ctrName], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

// ***Optional***

//addAdmin : Give another account admin priv

module.exports = apiRouter;
