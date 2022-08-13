//Main container to hold other components

import React, { useState, useEffect } from "react";
import VolunteerService from "../../Services/VolunteerService";

const VolunteerController = () => {
	const [volunteers, setVolunteers] = useState([]);

	useEffect(() => {
		VolunteerService.getVolunteers().then((data) => {
			setVolunteers(data);
		});
	});

	return (
		<>
			<h2>This is a placeholder for Volunteer Controller</h2>
			<br />
			<h1>List of Volunteers Test</h1>
			<ul></ul>
		</>
	);
};

export default VolunteerController;
