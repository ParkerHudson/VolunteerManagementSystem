const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");
const { checkForTables } = require("./models/tableGeneration");
const { connection } = require("./config");
const createError = require("http-errors");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());

app.use("/api", apiRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || "Internal Server Error";
	res.status(err.statusCode).json({
		message: err.message,
	});
});

app.listen(5000, () => {
	console.log("Express Server Started.");
});

checkForTables(connection);
