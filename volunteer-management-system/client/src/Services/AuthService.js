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
		let obj = { token: token };
		return fetch("user/authenticated", {
			method: "post",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			return res.json().then((data) => data);
		});
	},

	logout: () => {
		return fetch("user/logout", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => data);
	},
};
