const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./client/src/Components/LoginInfo");

const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies["access_token"];
	}
	return token;
}

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: cookieExtractor,
			secretOrKey: "DevOspreys",
		},
		(payload, done) => {
			//Check if user exists
		}
	)
);

passport.use(new LocalStrategy((username, password, done) => {
	//Check if user exists

	//If no usr exists, throw error

	//Checks if password ia correct
		

}));
