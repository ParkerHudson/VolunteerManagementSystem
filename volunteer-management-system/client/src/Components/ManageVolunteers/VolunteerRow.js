//Take in volunteer object
//Return list element (<li>) containing Volunteer name, edit button, and view matches button

import React from "react";
import { Link } from "react-router-dom";

const VolunteerRow = (props) => {
	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<tr>
			<td>{props.volunteer.username}</td>
			<td>
				{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
				{capitalizeFirstLetter(props.volunteer.lastName)}
			</td>

			<td>{capitalizeFirstLetter(props.volunteer.approvalStatus)}</td>
			<td>
				<Link to="/editVolunteer" state={{ volunteer: props.volunteer }}>
					Edit
				</Link>
			</td>
			<td>
				<Link to="/volunteerMatches" state={{ volunteer: props.volunteer }}>
					View Opportunities
				</Link>
			</td>
		</tr>
	);
};

export default VolunteerRow;
