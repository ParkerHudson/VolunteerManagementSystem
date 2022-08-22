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

const VolunteerRow = (props) => {
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
				<Link to="/OpportunityMatches" state={{ volunteer: props.volunteer }}>
					<button className=" btn btn-primary ">View Opportunities</button>
				</Link>
			</td>
			<td>
				<button
					type="button"
					data-bs-toggle="modal"
					data-bs-target={"#" + props.volunteer.username}
				>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						data-toggle="tooltip"
						data-placement="top"
						title="Details"
						className="blue"
					></FontAwesomeIcon>
				</button>

				<div
					className="modal fade"
					id={props.volunteer.username}
					tabindex="-1"
					aria-labelledby={props.volunteer.username + "Label"}
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id={props.volunteer.username + "Label"}
								>
									{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
									{capitalizeFirstLetter(props.volunteer.lastName)}'s Details
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<div className="row g-2">
									<div className="col">
										<p>Username: {props.volunteer.username} </p>
										<p>
											First Name:{" "}
											{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
										</p>
										<p>
											Last Name:{" "}
											{capitalizeFirstLetter(props.volunteer.lastName)}{" "}
										</p>
										<p>Address: {props.volunteer.address} </p>
										<p>Home Phone: {props.volunteer.homePhone} </p>
										<p>Work Phone: {props.volunteer.workPhone} </p>
										<p>Cell Phone: {props.volunteer.cellPhone} </p>
										<p>Email: {props.volunteer.email} </p>
									</div>
									<div className="col">
										<p>
											Education:{" "}
											{capitalizeFirstLetter(props.volunteer.education)}{" "}
										</p>
										<p>License(s): {props.volunteer.licenses} </p>
										<p>
											Emergency Contact Name: {props.volunteer.emContactName}{" "}
										</p>
										<p>
											Emergency Contact Phone: {props.volunteer.emContactPhone}{" "}
										</p>
										<p>
											Emergency Contact Email: {props.volunteer.emContactEmail}{" "}
										</p>
										<p>
											Emergency Contact Address:{" "}
											{props.volunteer.emContactAddress}{" "}
										</p>
										<p>Drivers License: {props.volunteer.driversLicense} </p>
										<p>
											Social Security Number: {props.volunteer.socialSecurity}{" "}
										</p>
										<p>
											Approval Status:{" "}
											{capitalizeFirstLetter(props.volunteer.approvalStatus)}{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</td>
			<td>
				<Link to="/editVolunteer" state={{ volunteer: props.volunteer }}>
					<FontAwesomeIcon
						icon={faPenToSquare}
						data-toggle="tooltip"
						data-placement="top"
						className="blue"
						title="Edit Volunteer"
					></FontAwesomeIcon>
				</Link>
			</td>
		</tr>
	);
};

export default VolunteerRow;
