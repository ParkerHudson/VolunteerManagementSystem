const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");
const { checkForTables } = require("./models/tableGeneration");
const { connection } = require("./config");

app.use(cookieParser());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(5000, () => {
	console.log("Express Server Started.");
});

checkForTables(connection);


