import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const OpportunityView = (props) => {
	const location = useLocation();
	const { opportunity } = location.state;
	const [ctrName] = useState(opportunity.ctrName);
	const [category] = useState(opportunity.category);
	const [time] = useState(opportunity.time);

	const convertDate = (date) => {
		let updatedDate = new Date(date);
		return updatedDate.toLocaleDateString();
	};

	const convertTime = (date) => {
		let parsedTime = new Date(date);
		return parsedTime.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};

	return (
		<>
			<h1 className="text-center">Opportunity Information</h1>
			<div className="form-inner">
				<h3>Center Name: {ctrName}</h3>
				<h3>Category: {category} </h3>
				<h3>Date: {convertDate(time)} </h3>
				<h3>Time: {convertTime(time)} </h3>

				<Link to="/manageOpportunities">
					<button type="button" class="btn btn-info">
						Back
					</button>
				</Link>
			</div>
		</>
	);
};

export default OpportunityView;
