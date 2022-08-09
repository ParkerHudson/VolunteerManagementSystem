const mysql = require("mysql2");

const env = process.env;

const db = {
	host: env.DB_HOST || "localhost",
	user: env.DB_USER || "DevOspreys",
	password: env.DB_PASSWORD || "ISSP",
	database: env.DB_NAME || "TeamDB",
};

var connection = mysql.createConnection(db);

connection.connect((err) => {
	if (err) {
		console.log("Error connecting to DB: " + err);
	} else {
		console.log("Connected to DB");
	}
});

module.exports = {
	connection: mysql.createConnection(db),
};
