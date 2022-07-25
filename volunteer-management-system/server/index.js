const express = require("express");
const app = express();
var mysql = require("mysql2");
const config = require("./config");
const tables = require("./models/tableGeneration");

//Establish DB connection using information in config file

var con = mysql.createConnection({
	host: config.host,
	user: config.username,
	password: config.password,
});

con.connect(function (err) {
	if (err) {
		console.log("Error connecting to DB: " + err);
	} else {
		console.log("Connected!");
	}
});

tables.checkForTables(con);

//This was used to test if tables were being created

/* con.query("DESCRIBE USER", function (err, result) {
	if (err) throw err;
	console.log("Description: " + JSON.stringify(result));
}); */
