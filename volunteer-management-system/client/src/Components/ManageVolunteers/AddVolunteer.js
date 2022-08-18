//Form to add volunteer to DB
import React from "react";
//import { stripBasename } from "react-router/lib/router";
import { useState } from "react";
import VolunteerService from "../../Services/VolunteerService";

const AddVolunteer = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [homePhone, setHomePhone] = useState("");
	const [workPhone, setWorkPhone] = useState("");
	const [cellPhone, setCellPhone] = useState("");
	const [email, setEmail] = useState("");
	const [education, setEducation] = useState("");
	const [licenses, setLicenses] = useState("");
	const [emContactName, setEmContactName] = useState("");
	const [emContactPhone, setEmContactPhone] = useState("");
	const [emContactEmail, setEmContactEmail] = useState("");
	const [emContactAddress, setEmContactAddress] = useState("");
	const [dlNumber, setDLNumber] = useState("");
	const [ssn, setSSN] = useState("");
	const [skills, setSkills] = useState("");

	const addVol = () => {
		VolunteerService.postVolunteer({
			username: firstName,
			firstName: firstName,
			lastName: lastName,
			address: address,
			homePhone: homePhone,
			workPhone: workPhone,
			cellPhone: cellPhone,
			email: email,
			education: education,
			licenses: licenses,
			emContactName: emContactName,
			emContactPhone: emContactPhone,
			emContactEmail: emContactEmail,
			emContactAddress: emContactAddress,
			driversLicense: 1,
			socialSecurity: 1,
			approvalStatus: "approved",
			skills: skills,
		});
		console.log("Added volunteer.");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addVol();
		window.alert("Volunteer Added!");

		//update database with form data
	};

	//Approval status select
	//Username field
	//drivers license field (1 or 0)
	//social security field (1 or 0)

	//Skills checkboxes based off of center pref skills

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-inner">
				<h2> Add a Volunteer </h2>

				<div className="form-group">
					<label htmlFor="firstName">First Name: </label>
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name: </label>
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Address: </label>
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="homePhone">Home Phone: </label>
					<input
						type="text"
						value={homePhone}
						onChange={(e) => setHomePhone(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="workPhone">Work Phone: </label>
					<input
						type="text"
						value={workPhone}
						onChange={(e) => setWorkPhone(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cellPhone">Cell Phone: </label>
					<input
						type="text"
						value={cellPhone}
						onChange={(e) => setCellPhone(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="education">Education: </label>
					<input
						type="text"
						value={education}
						onChange={(e) => setEducation(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="licenses">Licenses: </label>
					<input
						type="text"
						value={licenses}
						onChange={(e) => setLicenses(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="emConName">Emergency Contact Name: </label>
					<input
						type="text"
						value={emContactName}
						onChange={(e) => setEmContactName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="emConPhone">Emergency Contact Phone Number: </label>
					<input
						type="text"
						value={emContactPhone}
						onChange={(e) => setEmContactPhone(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="emConEmail">Emergency Contact Email: </label>
					<input
						type="text"
						value={emContactEmail}
						onChange={(e) => setEmContactEmail(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="emConAddress">Emergency Contact Address: </label>
					<input
						type="text"
						value={emContactAddress}
						onChange={(e) => setEmContactAddress(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="dlNumber">Driver's License Number: </label>
					<input
						type="text"
						value={dlNumber}
						onChange={(e) => setDLNumber(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="ssn">Social Security Number: </label>
					<input
						type="text"
						value={ssn}
						onChange={(e) => setSSN(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="skills">Skills: </label>
					<input
						type="text"
						value={skills}
						onChange={(e) => setSkills(e.target.value)}
					/>
				</div>

				<button type="button" class="btn btn-success" onClick={addVol}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddVolunteer;
