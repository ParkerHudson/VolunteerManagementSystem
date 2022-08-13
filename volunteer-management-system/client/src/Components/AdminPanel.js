//Two buttons
//manage Opportunities
//manage volunteers

import React, { useState, useEffect } from "react";
import VolunteerService from "../Services/VolunteerService";
import VolunteerController from "./ManageVolunteers/VolunteerController";

const AdminPanel = () => {
	const [volunteers, setVolunteers] = useState([]);

	useEffect(() => {
		VolunteerService.getVolunteers().then((data) => {
			setVolunteers(data);
		});
	});

	return (
		<>
			<h2>This is a placeholder for admin panel</h2>
			<VolunteerController />
		</>
	);
};

export default AdminPanel;
