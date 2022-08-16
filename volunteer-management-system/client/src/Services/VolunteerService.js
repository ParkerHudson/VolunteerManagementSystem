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
	},

	// addVolunteerSkill : fetch addSkill api
	// add entry to skills table with username and skill
	addVolunteerSkill: (volunteer, skill) => {
		var volSkill = {};
		volSkill.username = volunteer.username;
		volSkill.skill = skill;

		return fetch("/api/addSkill", {
			method: "post",
			body: JSON.stringify(volSkill),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// getVolunteerSkills : fetch getSkills api
	// take in volunteer, return list of skills by username
	getVolunteerSkills: (volunteer) => {
		return fetch("/api/getSkills", {
			method: "get",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// updateVolunteerSkills : fetch updateSkill api
	// update skills table with volunteer username, skill (old), and newSkill
	updateVolunteerSkill: (volunteer, skill, newSkill) => {
		var update = {
			username: volunteer.username,
			newSkill: newSkill,
			skill: skill
		};

		return fetch("/api/updateSkill", {
			method: "post",
			body: JSON.stringify(update),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	deleteVolunteerSkill: (volunteer, skill) => {
		var removeSkill = {
			username: volunteer.username,
			skill: skill
		};

		return fetch("/api/deleteSkill", {
			method: "delete",
			body: JSON.stringify(removeSkill),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	}
};
