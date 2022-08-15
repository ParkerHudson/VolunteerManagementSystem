//Display matches for given volunteer

import React from "react";
import { useLocation } from "react-router-dom";

const VolunteerMatches = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;
	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>
			<h1>{volunteer.username}</h1>
		</>
	);
};

export default VolunteerMatches;
