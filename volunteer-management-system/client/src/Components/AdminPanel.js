//Two buttons
//manage Opportunities
//manage volunteers

import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";

const AdminPanel = () => {
	return (
		<>
			<form>
				<div className="form-inner">
					<h2 className="text-center">
						{" "}
						DevOspreys Volunteer Management System
					</h2>
					<Link
						to="/manageVolunteers"
						className="btn btn-primary btn-block btn-lg w-100"
					>
						Manage Volunteers
					</Link>
					<br></br>
					<br></br>
					<Link
						to="/manageOpportunities"
						className="btn btn-block btn-lg btn-primary w-100"
					>
						Manage Opportunities
					</Link>
				</div>
			</form>
		</>
	);
};

export default AdminPanel;
