//Main container to hold other components

import React from "react";

import VolunteerSearch from "./VolunteerSearch";

const VolunteerController = () => {
	return (
		<>
			<h2 className="text-center">Manage Volunteers</h2>

			<div className="container-fluid ">
				<VolunteerSearch />
			</div>
		</>
	);
};

export default VolunteerController;
