//Main controller to hold other components

import React from "react";
import OpportunitySearch from "./OpportunitySearch";
import EditOpportunity from "./EditOpportunity";
import { Link } from "react-router-dom";

const OpportunityController = () => {
	return (
		<>
			<h2 className="text-center">Manage Opportunities</h2>

			<div className="container-fluid ">
				<OpportunitySearch />
			</div>
		</>
	);
};

export default OpportunityController;
