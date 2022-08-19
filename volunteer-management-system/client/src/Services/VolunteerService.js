//import { post } from "../../../server/routes/api";

export default {
	//////////////////
	//  VOLUNTEERS  //
	//////////////////

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

	////////////////
	//   SKILLS   //
	////////////////

	// addVolunteerSkill : fetch addSkill api
	// add entry to skills table with username and skill
	addVolunteerSkill: (username, skill) => {
		var volSkill = {};
		volSkill.username = username;
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
	getVolunteerSkills: (volunteerUsername) => {
		return fetch("/api/getSkills", {
			method: "get",
			body: JSON.stringify(volunteerUsername),
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
		var skillUpdate = {
			username: volunteer.username,
			newSkill: newSkill,
			skill: skill,
		};

		return fetch("/api/updateSkill", {
			method: "post",
			body: JSON.stringify(skillUpdate),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// deleteVolunteerSkill : fetch deleteSkill api
	// remove entry for volunteer in preferredCenter table
	deleteVolunteerSkill: (volunteer, skill) => {
		var removeSkill = {
			username: volunteer.username,
			skill: skill,
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
	},

	///////////////////
	//  PREF CENTER  //
	///////////////////

	getCenters: () => {
		return fetch("/api/getCenters").then((response) => {
			return response.json().then((data) => data);
		});
	},
	postCenter: (ctrName) => {
		return fetch("/api/addCenter", {
			method: "post",
			body: JSON.stringify(ctrName),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// addPrefCtr : fetch addPrefCenter api
	// take in volunteer and center name
	addPrefCtr: (volunteer, centerName) => {
		var pref = {
			username: volunteer.username,
			ctrName: centerName,
		};

		return fetch("api/addPrefCenter", {
			method: "post",
			body: JSON.stringify(pref),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// getPrefCtr : fetch getPrefCenter api
	// take in volunteer, return preferred center
	getPrefCtr: (volunteer) => {
		return fetch("api/getPrefCenter", {
			method: "get",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// updatePrefCtr : fetch updatePrefCenter api
	// take in volunteer, prefCtr (old), and newPrefCtr
	updatePrefCtr: (volunteer, centerName) => {
		var prefCtrUpdate = {
			username: volunteer.username,
			ctrName: centerName,
		};

		return fetch("/api/updateSkill", {
			method: "put",
			body: JSON.stringify(prefCtrUpdate),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// deletePrefCtr : fetch deletePrefCenter api
	// take in volunteer, remove prefCtr entry for the username
	deletePrefCtr: (volunteer) => {
		return fetch("/api/deletePrefCenter", {
			method: "delete",
			body: JSON.stringify(volunteer),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// getOpportunityMatches : fetch getOppMatches api
	// take in username, return list of matching opportunities
	getOpportunityMatches: (volunteer) => {
		var query = new URLSearchParams();
		query.append("username", volunteer.username);

		let url = "api/getOppMatches?" + query;

		return fetch(url).then((response) => {
			return response.json().then((data) => data);
		});
	},
};
