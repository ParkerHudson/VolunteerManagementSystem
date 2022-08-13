//Take in volunteer object
//Return list element (<li>) containing Volunteer name, edit button, and view matches button

import React from "react";

const VolunteerRow = (props) => {
	return (
		<>
			<li>{props.volunteer.username}</li>
		</>
	);
};

export default VolunteerRow;
