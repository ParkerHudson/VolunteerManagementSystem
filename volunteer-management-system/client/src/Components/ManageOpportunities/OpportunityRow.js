import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const OpportunityRow = (props) => {
	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

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
		<tr style={{ verticalAlign: "middle" }}>
			<td>{props.opportunity.oppID}</td>
			<td>{capitalizeFirstLetter(props.opportunity.ctrName)}</td>
			<td>{props.opportunity.category}</td>
			<td>{convertDate(props.opportunity.time)}</td>
			<td>{convertTime(props.opportunity.time)}</td>

			<td>
				<Link to="/volunteerMatches" state={{ opportunity: props.opportunity }}>
					<button className=" btn btn-primary ">View Volunteer Matches</button>
				</Link>
			</td>

			<td>
				<Link to="/editOpportunity" state={{ opportunity: props.opportunity }}>
					<FontAwesomeIcon
						icon={faPenToSquare}
						data-toggle="tooltip"
						data-placement="top"
						title="Edit Opportunity"
					></FontAwesomeIcon>
				</Link>
			</td>
		</tr>
	);
};

export default OpportunityRow;
