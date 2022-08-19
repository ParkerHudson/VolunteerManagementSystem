//Display opportunity matches for given volunteer

import React from "react";
import { useLocation } from "react-router-dom";
import VolMatchTable from "./VolMatchTable";

const VolunteerMatches = (props) => {
	const location = useLocation();
	const { opportunity } = location.state;

	// verify opportunity being passed
	// console.log(opportunity);

	const convertDate = (date) => {
		let updatedDate = new Date(date);
		return updatedDate.toLocaleDateString();
	};

	const convertTime = (date) => {
		let parsedTime = new Date(date);
		return parsedTime.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};

	return (
		<>
			<h1>Volunteer Matches for {opportunity.ctrName}, {convertDate(opportunity.time)} at {convertTime(opportunity.time)}</h1>
			<VolMatchTable opportunity={opportunity} />
		</>
	);
};

export default VolunteerMatches;
