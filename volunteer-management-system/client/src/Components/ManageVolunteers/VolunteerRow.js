//Take in volunteer object
//Return list element (<li>) containing Volunteer name, edit button, and view matches button

import React from "react";
import { Link } from "react-router-dom";

const VolunteerRow = (props) => {
	return (
		<>
			<li>
				{props.volunteer.username}{" "}
				<Link to="/editVolunteer" state={{ volunteer: props.volunteer }}>
					Edit
				</Link>
			</li>
		</>
	);
};

export default VolunteerRow;
