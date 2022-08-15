//Take in volunteer object
//Return table element (<td>) containing Volunteer name, edit button, and view matches button

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const VolunteerRow = (props) => {
	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<tr>
			<td>{props.volunteer.username}</td>
			<td>
				{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
				{capitalizeFirstLetter(props.volunteer.lastName)}
			</td>

			<td>{capitalizeFirstLetter(props.volunteer.approvalStatus)}</td>

			<td>
				<Link to="/volunteerMatches" state={{ volunteer: props.volunteer }}>
					View Opportunities
				</Link>
			</td>
			<td>
				<Link to="/viewVolunteerInfo" state={{ volunteer: props.volunteer }}>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						data-toggle="tooltip"
						data-placement="top"
						title="View Details"
					></FontAwesomeIcon>
				</Link>
			</td>
			<td>
				<Link to="/editVolunteer" state={{ volunteer: props.volunteer }}>
					<FontAwesomeIcon
						icon={faPenToSquare}
						data-toggle="tooltip"
						data-placement="top"
						title="Edit Volunteer"
					></FontAwesomeIcon>
				</Link>
			</td>
		</tr>
	);
};

export default VolunteerRow;
