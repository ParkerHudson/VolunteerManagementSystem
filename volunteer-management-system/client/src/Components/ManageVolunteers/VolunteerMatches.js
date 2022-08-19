//Display opportunity matches for given volunteer

import React from "react";
import { useLocation } from "react-router-dom";
import VolMatchTable from "./VolMatchTable";

const VolunteerMatches = (props) => {
	const location = useLocation();
	const { opportunity } = location.state;

	// verify opportunity being passed
	// console.log(opportunity);

	return (
		<>
			<h1>Volunteer Matches for {opportunity.ctrName}, {opportunity.time}</h1>
			<VolMatchTable opportunity={opportunity} />
		</>
	);
};

export default VolunteerMatches;
