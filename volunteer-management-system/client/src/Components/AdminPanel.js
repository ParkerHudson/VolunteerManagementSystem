//Two buttons
//manage Opportunities
//manage volunteers

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
	return (
		<>
			<h2>This is a placeholder for admin panel</h2>
			<Link to="/manageVolunteers">Manage Volunteers</Link>
		</>
	);
};

export default AdminPanel;
