export default {
	//getVolunteers : fetch getVolunteers api
	//param : search value, filter
	getVolunteers: (filter, search) => {
		var query = new URLSearchParams();
		if (filter != "") {
			query.append("filter", filter);
		} else {
			query.append("filter", "all");
		}
		if (search != "") {
			query.append("search", search);
		}

		let url = "/api/getVolunteers?" + query;
		return fetch(url).then((response) => {
			return response.json().then((data) => data);
		});
	},

	//postVolunteer : fetch addVolunteer api
	postVolunteer: (volunteer) => {
		return fetch("/api/addVolunteer", {
			method: "post",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// deleteVolunteer : fetch deleteVolunteer api
	deleteVolunteer: (volunteer) => {
		return fetch("/api/deleteVolunteer", {
			method: "delete",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	//updateVolunteer : fetch updateVolunteer api
	updateVolunteer: (volunteer) => {
		return fetch("/api/updateVolunteer", {
			method: "put",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	}
};
