export default {
	//getVolunteers : fetch getVolunteers api
	//param : search value, filter
	getVolunteers: (filter, search) => {
		var query = new URLSearchParams();
		query.append("filter", filter);
		query.append("search", search);
		let url = "/api/getVolunteers?" + query;
		return fetch(url).then((response) => {
			return response.json().then((data) => data);
		});
	},

	//postVolunteer : fetch addVolunteer api

	//deleteVolunteer : fetch deleteVolunteer api

	//updateVolunteer : fetch updateVolunteer api
};
