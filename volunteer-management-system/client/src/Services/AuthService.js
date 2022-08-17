export default {
	login: (user) => {
		return fetch("user/login", {
			method: "post",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => data);
	},

	isAuthenticated: (token) => {
		return fetch(
			"user/authenticated",
			{
				method: "post",
				body: JSON.stringify(user),
				headers: {
					"Content-Type": "application/json",
				},
			}.then((res) => {
				if (res.isAuthorized == "true") return res.json().then((data) => data);
				else return { isAuthenticated: false, user: { username: "" } };
			})
		);
	},
};
