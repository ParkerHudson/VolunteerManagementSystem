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

	//deleteVolunteer : fetch deleteVolunteer api

	//updateVolunteer : fetch updateVolunteer api
};
