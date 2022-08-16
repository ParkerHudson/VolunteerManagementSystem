const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./client/src/Components/LoginInfo");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
// import passport and passport-jwt modules
const passport = require("passport");
const passportJWT = require("passport-jwt");
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
	console.log("payload received", jwt_payload);
	let user = getUser({ id: jwt_payload.id });
	if (user) {
		next(null, user);
	} else {
		next(null, false);
	}
});
// use the strategy
passport.use(strategy);
