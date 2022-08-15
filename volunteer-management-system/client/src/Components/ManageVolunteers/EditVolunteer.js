//Take in volunteer object.
//Display current data.
//Allow user to edit data and save to db
//Delete volunteer button
//back button to return to previous view

//WIP
import React from "react";
import { useLocation } from "react-router-dom";

const EditVolunteer = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;
	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>
			<h1>{volunteer.username}</h1>
		</>
	);
};

export default EditVolunteer;
