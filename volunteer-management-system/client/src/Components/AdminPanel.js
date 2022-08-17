//Two buttons
//manage Opportunities
//manage volunteers

import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
	return (
		<>
			<div className=" align-items-center w-100 text-center py-10">
				<Link
					to="/manageVolunteers"
					className="btn btn-primary btn-block btn-lg w-25 py-2"
				>
					Manage Volunteers
				</Link>
				<br></br>
				<br></br>
				<Link
					to="/manageOpportunities"
					className="btn btn-lg btn-primary  w-25 p-15"
				>
					Manage Opportunities
				</Link>
			</div>
		</>
	);
};

export default AdminPanel;
