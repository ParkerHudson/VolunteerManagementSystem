//Take in opportunity, display volunteers who match the pref skill of the opportunity given

import React from "react";
import { useLocation } from "react-router-dom";
import OppMatchTable from "./OppMatchTable";
import { Link } from "react-router-dom";

const OpportunityMatches = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;

	// verify volunteer being passed
	// console.log(volunteer);

	return (
		<>
			<h1>
				Opportunity Matches for {volunteer.firstName} {volunteer.lastName}
			</h1>
			<OppMatchTable volunteer={volunteer} />
			<Link to="/manageVolunteers">
				<button type="button" class="btn btn-primary">
					Back
				</button>
			</Link>
		</>
	);
};

export default OpportunityMatches;
