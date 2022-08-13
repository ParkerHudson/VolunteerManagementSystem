export default {
	//getVolunteers : fetch getVolunteers api
	//param : search value, filter
	getVolunteers: () => {
		return fetch("/api/getVolunteers").then((response) => {
			return response.json().then((data) => data);
		});
	},

	//postVolunteer : fetch addVolunteer api

	//deleteVolunteer : fetch deleteVolunteer api

	//updateVolunteer : fetch updateVolunteer api
};
