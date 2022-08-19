const express = require("express");
const config = require("../config");
const apiRouter = express.Router();
const Opportunity = require("../models/Opportunity");
const Volunteer = require("../models/Volunteer");

var connection = config.connection;

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
					" WHERE (approvalStatus = 'approved' OR approvalStatus = 'pending')";
				break;
			case "approved":
				query = query + " WHERE approvalStatus = 'approved'";
				break;
			case "pending":
				query = query + " WHERE approvalStatus = 'pending'";
				break;
			case "disapproved":
				query = query + " WHERE approvalStatus = 'denied'";
				break;
			case "inactive":
				query = query + " WHERE approvalStatus = 'inactive'";
				break;
			default:
				query =
					query +
					" WHERE (approvalStatus = 'inactive' OR approvalStatus = 'approved' OR approvalStatus = 'pending' OR approvalStatus = 'denied')";
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

//deleteVolunteer : delete volunteer by username
apiRouter.delete("/deleteVolunteer", (req, res) => {
	let query = "DELETE FROM volunteer WHERE username = ?";
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

//updateVolunteer : update volunteer by username
apiRouter.put("/updateVolunteer", (req, res) => {
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
			req.body.username,
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

//addPrefCenter : add preferred center pair to DB (params: username & center)
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
apiRouter.put("/updatePrefCenter", (req, res) => {
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
apiRouter.delete("/deletePrefCenter", (req, res) => {
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
apiRouter.delete("/deleteSkill", (req, res) => {
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

//getOppMatches : Take in username, return list of matching opportunities
apiRouter.get("/getOppMatches", (req, res) => {
	const username = req.query.username;
	const query =
		"SELECT distinct o.* \
		FROM volunteer v, preferredcenter pc, opportunity o, skills s, center c \
		WHERE pc.ctrName = o.ctrName \
		AND pc.username = v.username \
		AND s.username = v.username \
		AND s.skill = o.category \
		AND v.username = ?;";

	connection.execute(query, [username], (err, results) => {
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
apiRouter.get("/getVolMatches?", (req, res) => {
	const query =
		"SELECT DISTINCT v.* \
		FROM volunteer v, preferredcenter pc, opportunity o, skills s, center c \
		WHERE v.username = pc.username \
		AND pc.ctrName = o.ctrName \
		AND s.skill = o.category \
		AND o.ctrName = ?;";

	connection.execute(query, [req.query.ctrName], (err, results) => {
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
	let filter = req.query.filter;
	let search = req.query.search;
	let today = new Date();
	today.setTime(req.query.date);
	let sixtyDaysAgo = new Date();
	sixtyDaysAgo.setDate(today.getDate() - 60);
	let valuesToPass = [];

	if (search != null) {
		query =
			query +
			" WHERE (ctrName LIKE CONCAT ('%',?,'%') OR category LIKE CONCAT ('%',?,'%'))";
		valuesToPass.push(search, search);
		switch (filter) {
			case "recent":
				query = query + " AND time >= ?";
				valuesToPass.push(sixtyDaysAgo);
				break;
			case "byCenter":
				query = query + " ORDER BY ctrName ASC";
				break;
			default:
				query = query;
				break;
		}
	} else {
		if (filter != null) {
			switch (filter) {
				case "recent":
					query = query + " WHERE time >= ? ";
					valuesToPass.push(sixtyDaysAgo);
					break;
				case "byCenter":
					query = query + " ORDER BY ctrName ASC";
					break;
				default:
					query = query;
					break;
			}
		}
	}
	connection.execute(query, valuesToPass, (err, results) => {
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
	var time = new Date(req.body.time);

	let query = "INSERT INTO opportunity VALUES (NULL, ?, ?, ?)";

	connection.execute(
		query,
		[req.body.ctrName, req.body.category, time],
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
