//This function checks to make sure that tables have been created and creates them if they have not.

const checkForTables = (con) => {
	con.query("CREATE DATABASE IF NOT EXISTS TeamDB", function (err, result) {
		if (err) throw err;
		console.log("Database Created");
	});

	con.query(
		"CREATE TABLE IF NOT EXISTS USER (userId VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, isAdmin BOOL)",
		function (err) {
			if (err) throw err;
			console.log("User Table Created");
		}
	);

	con.query(
		"CREATE TABLE IF NOT EXISTS VOLUNTEER (volunteerId VARCHAR(255) PRIMARY KEY, firstName VARCHAR(255) NOT NULL, \
        lastName VARCHAR(255) NOT NULL, address VARCHAR(255), homePhone VARCHAR(255),	workPhone VARCHAR(255),	cellPhone VARCHAR(255),	\
        email VARCHAR(255),	education VARCHAR(255),	licenses VARCHAR(255), emContactName VARCHAR(255), emContactPhone VARCHAR(255),	\
        emContactEmail VARCHAR(255), emContactAddress VARCHAR(255), \
        driversLicense BOOL, socialSecurity BOOL, approvalStatus VARCHAR(255) NOT NULL,	\
        skills VARCHAR(255), FOREIGN KEY(volunteerId) REFERENCES USER(userId) )",
		function (err) {
			if (err) throw err;
			console.log("Volunteer Table Created");
		}
	);

	con.query(
		"CREATE TABLE IF NOT EXISTS CENTER (centerName VARCHAR(255) PRIMARY KEY)",
		function (err) {
			if (err) throw err;
			console.log("Center Table Created");
		}
	);

	con.query(
		"CREATE TABLE IF NOT EXISTS PREFERREDCENTER (volId VARCHAR(255) NOT NULL,\
        ctrName VARCHAR(255) NOT NULL, FOREIGN KEY(volId) REFERENCES USER(userId), FOREIGN KEY(ctrName) REFERENCES CENTER(centerName)  )",
		function (err) {
			if (err) throw err;
			console.log("PREFFEREDCENTER Table Created");
		}
	);

	con.query(
		"CREATE TABLE IF NOT EXISTS OPPORTUNITY (	ctrName VARCHAR(255) NOT NULL, category VARCHAR(255) NOT NULL, \
        time DATETIME NOT NULL, FOREIGN KEY(ctrName) REFERENCES CENTER(centerName) )",
		function (err) {
			if (err) throw err;
			console.log("Opportunity Table Created");
		}
	);

	//Run this once. Alters preffered center table
	// con.query(
	// 	"ALTER TABLE PREFERREDCENTER ADD CONSTRAINT prefCtr PRIMARY KEY(volId,ctrName)",
	// 	function (err) {
	// 		if (err) throw err;
	// 		console.log("Center Table Created");
	// 	}
	// );
};

module.exports = {
	checkForTables,
};
