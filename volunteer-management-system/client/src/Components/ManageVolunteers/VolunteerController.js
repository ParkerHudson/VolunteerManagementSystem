//Main container to hold other components

import React, { useState, useEffect } from "react";
import VolunteerService from "../../Services/VolunteerService";
import VolunteerRow from "./VolunteerRow";

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

			<h1>List of Volunteers Test</h1>

			<ul>
				{volunteers.map((volunteer) => {
					return (
						<VolunteerRow key={volunteer.username} volunteer={volunteer} />
					);
				})}
			</ul>
		</>
	);
};

export default VolunteerController;
