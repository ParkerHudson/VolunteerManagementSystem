const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");
const { checkForTables } = require("./models/tableGeneration");
const { connection } = require("./config");
const passport = require("passport");

app.use(cookieParser());
app.use(express.json());

app.use(passport.initialize());

app.use("/api", apiRouter);
app.use("/user", userRouter);

app.listen(5000, () => {
	console.log("Express Server Started.");
});

checkForTables(connection);
