//const Opportunity = require("../../../server/models/Opportunity");

export default {
	// addOpp : fetch addOpportunity api
	// take in center name, category, and time
	addOpp: (ctrName, category, time) => {
		var opp = {
			ctrName: ctrName,
			category: category,
			time: time,
		};

		return fetch("api/addOpportunity", {
			method: "post",
			body: JSON.stringify(opp),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},
	addCenter: (ctrName) => {
		var center = {
			ctrName: ctrName
		};

		return fetch("api/addCenter", {
			method: "post",
			body: JSON.stringify(center),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// getOpps : fetch getOpportunities api
	// return all opportunities, with filter and search options
	getOpps: (filter, search, date) => {
		var query = new URLSearchParams();
		if (filter != "") {
			query.append("filter", filter);
		} else {
			query.append("filter", "all");
		}
		if (search != "") {
			query.append("search", search);
		}
		query.append("date", date);

		let url = "/api/getOpportunities?" + query;
		return fetch(url).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// updateOpp : fetch updateOpportunity api
	// take in opportunity, update name/category/time for oppID
	updateOpp: (opportunity) => {
		return fetch("/api/updateOpportunity", {
			method: "put",
			body: JSON.stringify(opportunity),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// deleteOpp : fetch deleteOpportunity api
	// take in opportunity, delete entry for oppID
	deleteOpp: (opportunity) => {
		return fetch("/api/deleteOpportunity", {
			method: "delete",
			body: JSON.stringify(opportunity),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response.json().then((data) => data);
		});
	},

	// getVolunteerMatches : fetch getVolMatches api
	// take in oppID, return list of matching volunteers
	getVolunteerMatches: (opportunity) => {
		var query = new URLSearchParams();
		query.append("ctrName",opportunity.ctrName);

		let url = "api/getVolMatches?" + query;
		return fetch(url).then((response) => {
			return response.json().then((data) => data);
		});
	},
};
