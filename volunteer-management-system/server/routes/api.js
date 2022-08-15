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
	const query =
		"SELECT * from user WHERE userID = ? AND password = ? AND isAdmin ='1'";

	connection.execute(query, [req.body.volId], (err, results) => {
		if (err) console.log(err);
		res.send(results);
	});
});

//addUser : add user to DB

//updateUser : update user information

//addVolunteer : add volunteer to DB
apiRouter.post("/addVolunteer", (req, res) => {
	let query =
		"INSERT INTO volunteer VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

	connection.execute(
		query,
		[
			req.body.username,
			req.body.firstName,
			req.body.lastName,
			req.body.address,
			req.body.homePhone,
			req.body.workPhone,
			req.body.cellPhone,
			req.body.email,
			req.body.education,
			req.body.licenses,
			req.body.emContactName,
			req.body.emContactPhone,
			req.body.emContactEmail,
			req.body.emContactAddress,
			req.body.driversLicense,
			req.body.socialSecurity,
			req.body.approvalStatus,
			req.body.skills,
		],
		(err, results) => {
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
		}
	);
});

//getVolunteers : Return array of volunteers with optional where clause filter
apiRouter.get("/getVolunteers", (req, res) => {
	let query = "SELECT * FROM volunteer";
	let filter = req.query.filter;
	let search = req.query.search;
	if (filter != null) {
		switch (filter) {
			case "approved & pending":
				query =
					query +
					" WHERE approvalStatus = 'approved' OR approvalStatus = 'pending'";
				break;
			case "approved":
				query = query + " WHERE approvalStatus = 'approved'";
				break;
			case "pending":
				query = query + " WHERE approvalStatus = 'pending'";
				break;
			case "disapproved":
				query = query + " WHERE approvalStatus = 'disapproved'";
				break;
			case "inactive":
				query = query + " WHERE approvalStatus = 'inactive'";
				break;
			default:
				query =
					query +
					" WHERE approvalStatus = 'inactive' OR approvalStatus = 'approved' OR approvalStatus = 'pending' OR approvalStatus = 'disapproved'";
				break;
		}
	}
	if (search != null) {
		query = query + " AND username LIKE CONCAT ('%',?,'%')";
		connection.execute(query, [search], (err, results) => {
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
	} else {
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
	}
});
//deleteVolunteer : delete volunteer by volunteerId
apiRouter.post("/deleteVolunteer", (req, res) => {
	let query = "DELETE FROM volunteer WHERE volunteerID = ?";
	connection.execute(query, [req.body.volunteerID], (err, results) => {
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

//updateVolunteer : update volunteer by volunteerId
apiRouter.post("/updateVolunteer", (req, res) => {
	let query =
		"UPDATE volunteer \
		SET username = ?, \
			firstName = ?, \
			lastName = ?, \
			address = ?, \
			homePhone = ?, \
			workPhone = ?, \
			cellPhone = ?, \
			email = ?, \
			education = ?, \
			licenses = ?, \
			emContactName = ?,\
			emContactPhone = ?, \
			emContactEmail = ?, \
			emContactAddress = ?, \
			driversLicense = ?,\
			socialSecurity = ?, \
			approvalStatus = ?, \
			skills = ? \
		WHERE username = ?";
	connection.execute(
		query,
		[
			req.body.username,
			req.body.firstName,
			req.body.lastName,
			req.body.address,
			req.body.homePhone,
			req.body.workPhone,
			req.body.cellPhone,
			req.body.email,
			req.body.education,
			req.body.licenses,
			req.body.emContactName,
			req.body.emContactPhone,
			req.body.emContactEmail,
			req.body.emContactAddress,
			req.body.driversLicense,
			req.body.socialSecurity,
			req.body.approvalStatus,
			req.body.skills,
			req.body.username
		],
		(err, results) => {
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
		}
	);
});

//addPrefCenter : add preferred center pair to DB (params: volunteerID & center)
apiRouter.post("/addPrefCenter", (req, res) => {
	const query = "INSERT INTO preferredcenter VALUES (?, ?)";

	connection.execute(
		query,
		[req.body.username, req.body.ctrName],
		(err, results) => {
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
		}
	);
});

//getPrefCenter : get array of preferred center for each volunteer by username
apiRouter.get("/getPrefCenter", (req, res) => {
	const query = "SELECT * FROM preferredcenter WHERE username = ?";

	connection.execute(query, [req.body.username], (err, results) => {
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

//updatePrefCenter : update preferred center for volunteer given volunteer and center
apiRouter.post("/updatePrefCenter", (req, res) => {
	let query = "UPDATE preferredcenter SET ctrName = ? WHERE username = ?";
	connection.execute(
		query,
		[req.body.ctrName, req.body.username],
		(err, results) => {
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
		}
	);
});

//deletePrefCenter : delete preferred center pair given volunteer username
apiRouter.post("/deletePrefCenter", (req, res) => {
	let query = "DELETE FROM preferredcenter WHERE username = ?";
	connection.execute(query, [req.body.username], (err, results) => {
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

//addSkill : add a skill to the skills table
apiRouter.post("/addSkill", (req, res) => {
	const query = "INSERT INTO skills VALUES (?, ?)";

	connection.execute(
		query,
		[req.body.username, req.body.skill],
		(err, results) => {
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
		}
	);
});

//getSkills : get all of the skills of a particular username
apiRouter.get("/getSkills", (req, res) => {
	const query = "SELECT skill FROM skills WHERE username = ?";

	connection.execute(query, [req.body.username], (err, results) => {
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

//updateSkill : Update skill given username and skill
apiRouter.post("/updateSkill", (req, res) => {
	let query = "UPDATE skills SET skill = ? WHERE username = ? AND skill = ?";
	connection.execute(
		query,
		[req.body.newSkill, req.body.username, req.body.skill],
		(err, results) => {
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
		}
	);
});

//deleteSkill : Delete username/skill pair in skills table
apiRouter.post("/deleteSkill", (req, res) => {
	let query = "DELETE FROM skills WHERE username = ? AND skill = ?";
	connection.execute(
		query,
		[req.body.username, req.body.skill],
		(err, results) => {
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
		}
	);
});

//getOppMatches : Take in volunteer ID, return list of matching opportunities
apiRouter.get("/getOppMatches", (req, res) => {
	const query =
		"SELECT * \
		FROM opportunity o, preferredcenter pc \
		WHERE o.ctrName = pc.ctrName and pc.volId = ?;";

	connection.execute(query, [req.body.volId], (err, results) => {
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

//getVolMatches : Take in opportunity, get matching volunteers
apiRouter.get("/getVolMatches", (req, res) => {
	const query =
		"SELECT * \
		FROM volunteer v, preferredcenter pc, opportunity o \
		WHERE v.volunteerId = pc.volId AND pc.ctrName = o.ctrName AND o.oppID = ?;";

	connection.execute(query, [req.body.ctrName], (err, results) => {
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

//Return all opportunities in array
apiRouter.get("/getOpportunities", (req, res) => {
	let query = "SELECT * FROM opportunity";
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

//add opportunity to opportunity table
apiRouter.post("/addOpportunity", (req, res) => {
	var testTime = new Date();

	let query = "INSERT INTO opportunity VALUES (NULL, ?, ?, ?)";

	connection.execute(
		query,
		[req.body.ctrName, req.body.category, testTime],
		(err, results) => {
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
		}
	);
});

//deleteOpportunity : Delete opportunity by provided oppID
apiRouter.post("/deleteOpportunity", (req, res) => {
	let query = "DELETE FROM opportunity WHERE oppID = ?";
	connection.execute(query, [req.body.oppID], (err, results) => {
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

//updateOpportunity : Update opportunity by provided oppID
apiRouter.post("/updateOpportunity", (req, res) => {
	let query =
		"UPDATE opportunity SET ctrName = ?, category = ?, time = ? WHERE oppID = ?";
	connection.execute(
		query,
		[req.body.ctrName, req.body.category, req.body.time, req.body.oppID],
		(err, results) => {
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
		}
	);
});

// getCenters : Return all centers in array
apiRouter.get("/getCenters", (req, res) => {
	let query = "SELECT * FROM center";
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

// updateCenter : update center by provided ctrName
apiRouter.post("/updateCenter", (req, res) => {
	let query = "UPDATE center SET centerName = ? WHERE centerName = ?";
	connection.execute(
		query,
		[req.body.newCtrName, req.body.currentCtrName],
		(err, results) => {
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
		}
	);
});

// deleteCenter : delete center by provided ctrName
apiRouter.post("/deleteCenter", (req, res) => {
	let query = "DELETE FROM center WHERE centerName = ?";
	connection.execute(query, [req.body.ctrName], (err, results) => {
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

// addCenter : add center to DB
apiRouter.post("/addCenter", (req, res) => {
	let query = "INSERT INTO center VALUES (?)";

	connection.execute(query, [req.body.ctrName], (err, results) => {
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

// ***Optional***

//addAdmin : Give another account admin priv

module.exports = apiRouter;
