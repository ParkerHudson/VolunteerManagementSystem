//Take in volunteer object
//Return table element (<td>) containing Volunteer name, edit button, and view matches button

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faMagnifyingGlass,
	faCircleCheck,
	faCircleXmark,
	faCircleMinus,
	faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const VolMatchRow = (props) => {
	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const approvalStatus = (status) => {
		switch (status) {
			case "approved":
				return (
					<FontAwesomeIcon
						icon={faCircleCheck}
						className="green"
						data-toggle="tooltip"
						data-placement="top"
						title="Approved"
					></FontAwesomeIcon>
				);
			case "pending":
				return (
					<FontAwesomeIcon
						icon={faCircleHalfStroke}
						className="orange"
						data-toggle="tooltip"
						data-placement="top"
						title="Pending"
					></FontAwesomeIcon>
				);
			case "denied":
				return (
					<FontAwesomeIcon
						icon={faCircleXmark}
						className="red"
						data-toggle="tooltip"
						data-placement="top"
						title="Denied"
					></FontAwesomeIcon>
				);
			case "inactive":
				return (
					<FontAwesomeIcon
						icon={faCircleMinus}
						className="grey"
						data-toggle="tooltip"
						data-placement="top"
						title="Inactive"
					></FontAwesomeIcon>
				);
		}
	};

	return (
		<tr style={{ verticalAlign: "middle" }}>
			<td>{props.volunteer.username}</td>

			<td>
				{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
				{capitalizeFirstLetter(props.volunteer.lastName)}
			</td>

			<td>{props.volunteer.email}</td>

			<td style={{ textAlign: "center" }}>
				{approvalStatus(props.volunteer.approvalStatus)}
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
		</tr>
	);
};

export default VolMatchRow;