import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const VolunteerView = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;
	const [firstName] = useState(volunteer.firstName);
	const [lastName] = useState(volunteer.lastName);
	const [address] = useState(volunteer.address);
	const [homePhone] = useState(volunteer.homePhone);
	const [workPhone] = useState(volunteer.workPhone);
	const [cellPhone] = useState(volunteer.cellPhone);
	const [email] = useState(volunteer.email);
	const [education] = useState(volunteer.education);
	const [licenses] = useState(volunteer.licenses);
	const [emContactName] = useState(volunteer.emContactName);
	const [emContactPhone] = useState(volunteer.emContactPhone);
	const [emContactEmail] = useState(volunteer.emContactEmail);
	const [emContactAddress] = useState(volunteer.emContactAddress);
	const [driversLicense] = useState(volunteer.driversLicense);
	const [socialSecurity] = useState(volunteer.socialSecurity);
	const [approvalStatus] = useState(volunteer.approvalStatus);
	const [skills] = useState(volunteer.skills);
	
	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>
			<h1 className="text-center">Volunteer Information for {volunteer.username}</h1>
			<div className="form-inner">
				<h3>Username: { volunteer.username} </h3>
				<h3>First Name: { firstName} </h3>
				<h3>Last Name: { lastName} </h3>
				<h3>Address: { address} </h3>
				<h3>Home Phone: {homePhone}  </h3>
				<h3>Work Phone: {workPhone} </h3>
				<h3>Cell Phone: {cellPhone} </h3>
				<h3>Email: {email} </h3>
				<h3>Education: {education} </h3>
				<h3>License(s): {licenses}  </h3>
				<h3>Emergency Contact Name: {emContactName}  </h3>
				<h3>Emergency Contact Phone: {emContactPhone}  </h3>
				<h3>Emergency Contact Email: {emContactEmail}  </h3>
				<h3>Emergency Contact Address: {emContactAddress}  </h3>
				<h3>Drivers License: {driversLicense}  </h3>
				<h3>Social Security Number: {socialSecurity}  </h3>
				<h3>Approval Status: {approvalStatus}  </h3>
				<h3>Skills: {skills}  </h3>

				<Link to="/manageVolunteers">
						<button type="button" class="btn btn-info">
							Back
						</button>
					</Link>

			</div>

		</>
	);
};

export default VolunteerView;
