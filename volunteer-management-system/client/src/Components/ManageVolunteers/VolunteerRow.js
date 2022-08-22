//Take in volunteer object
//Return table element (<td>) containing Volunteer name, edit button, and view matches button

import React, { useState, useEffect } from "react";
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
import VolunteerService from "../../Services/VolunteerService";

const VolunteerRow = (props) => {
	const [skills, setSkills] = useState([]);
	const [prefCenter, setPrefCenter] = useState("");

	useEffect(() => {
		async function getSkills() {
			VolunteerService.getVolunteerSkills(props.volunteer.username).then(
				(data) => {
					const results = [];
					data.forEach((value) => {
						results.push(value.skill);
					});
					setSkills([...results]);
				}
			);
		}
		async function getPrefCenter() {
			VolunteerService.getPrefCtr(props.volunteer.username).then((data) => {
				if (data.length > 0) setPrefCenter(data[0].ctrName);
				console.log(prefCenter);
			});
		}

		getSkills();
		getPrefCenter();
	}, []);

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
										<p>
											<b>Username: </b>
											{props.volunteer.username}{" "}
										</p>
										<p>
											<b>First Name:</b>{" "}
											{capitalizeFirstLetter(props.volunteer.firstName)}{" "}
										</p>
										<p>
											<b>Last Name:</b>{" "}
											{capitalizeFirstLetter(props.volunteer.lastName)}{" "}
										</p>
										<p>
											<b>Address:</b> {props.volunteer.address}{" "}
										</p>
										<p>
											<b>Home Phone: </b>
											{props.volunteer.homePhone}{" "}
										</p>
										<p>
											<b>Work Phone: </b>
											{props.volunteer.workPhone}{" "}
										</p>
										<p>
											<b>Cell Phone: </b>
											{props.volunteer.cellPhone}{" "}
										</p>
										<p>
											<b>Email: </b>
											{props.volunteer.email}{" "}
										</p>
										<p>
											{" "}
											<b>Skills:</b>{" "}
											{skills.length > 1
												? skills.map((skill) => {
														return skill + ", ";
												  })
												: skills.map((skill) => {
														return skill;
												  })}
										</p>
										<p>
											<b>Preferred Center: </b>
											{prefCenter}
										</p>
									</div>
									<div className="col">
										<p>
											<b>Education:</b>{" "}
											{capitalizeFirstLetter(props.volunteer.education)}{" "}
										</p>
										<p>
											<b>License(s):</b> {props.volunteer.licenses}{" "}
										</p>
										<p>
											<b>Emergency Contact Name:</b>{" "}
											{props.volunteer.emContactName}{" "}
										</p>
										<p>
											<b>Emergency Contact Phone: </b>
											{props.volunteer.emContactPhone}{" "}
										</p>
										<p>
											<b>Emergency Contact Email: </b>
											{props.volunteer.emContactEmail}{" "}
										</p>
										<p>
											<b>Emergency Contact Address: </b>{" "}
											{props.volunteer.emContactAddress}{" "}
										</p>
										<p>
											<b>Drivers License: </b>{" "}
											{props.volunteer.driversLicense ? "Yes" : "No"}{" "}
										</p>
										<p>
											<b>Social Security Number: </b>
											{props.volunteer.socialSecurity ? "Yes" : "No"}{" "}
										</p>
										<p>
											<b>Approval Status: </b>{" "}
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
