//Two buttons
//manage Opportunities
//manage volunteers

import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
	return (
		<>
			<div className="">
				<Link to="/manageVolunteers">
					<button type="link" className="btn btn-info btn-block">
						Manage Volunteers
					</button>
				</Link>
			</div>
		</>
	);
};

export default AdminPanel;
