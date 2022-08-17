const { check } = require("express-validator");

exports.signupValidation = [
	check("username", "Username is required").not().isEmpty(),

	check("password", "Password must be 6 or more characters").isLength({
		min: 6,
	}),
];

exports.loginValidation = [
	check("password", "Password must be 6 or more characters").isLength({
		min: 6,
	}),
];
