import React, { useState, useEffect } from "react";
import OpportunityRow from "./OpportunityRow";
import OpportunityService from "../../Services/OpportunityService";

const OpportunityTable = (props) => {
	const [opportunities, setOpportunities] = useState([]);

	const getToday = () => {
		let today = new Date();
		let stringified = Date.parse(today);
		return stringified;
	};

	//Get volunteers from DB
	useEffect(() => {
		OpportunityService.getOpps(
			props.filter,
			props.search,
			getToday(),
			props.centerName
		).then((data) => {
			setOpportunities(data);
		});
	}, [props.search, props.filter, props.centerName]);

	return (
		<>
			<table className="table table-hover table-sm ">
				<thead className="table-dark">
					<tr>
						<th className="col-sm-1">Opportunity ID</th>
						<th className="col-sm-1">Center Name</th>
						<th className="col-sm-1">Category</th>
						<th className="col-sm-1">Date</th>
						<th className="col-sm-1">Time</th>
						<th colSpan={3} className="col-sm-1"></th>
					</tr>
				</thead>
				<tbody>
					{opportunities.length > 0 ? (
						opportunities.map((opportunity) => {
							return (
								<OpportunityRow
									key={opportunity.oppID}
									opportunity={opportunity}
								/>
							);
						})
					) : (
						<h3>No opportunities found . . .</h3>
					)}
				</tbody>
			</table>
		</>
	);
};

export default OpportunityTable;
