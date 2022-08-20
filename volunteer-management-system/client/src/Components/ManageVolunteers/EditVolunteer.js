//Take in volunteer object.
//Display current data.
//Allow user to edit data and save to db
//Delete volunteer button
//back button to return to previous view

//WIP
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import VolunteerService from "../../Services/VolunteerService";
import { Link } from "react-router-dom";

const EditVolunteer = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;
	const [firstName, setFirstName] = useState(volunteer.firstName);
	const [lastName, setlastName] = useState(volunteer.lastName);
	const [address, setAddress] = useState(volunteer.address);
	const [homePhone, setHomePhone] = useState(volunteer.homePhone);
	const [workPhone, setWorkPhone] = useState(volunteer.workPhone);
	const [cellPhone, setCellPhone] = useState(volunteer.cellPhone);
	const [email, setEmail] = useState(volunteer.email);
	const [education, setEducation] = useState(volunteer.education);
	const [licenses, setLicense] = useState(volunteer.licenses);
	const [emContactName, setEmContactName] = useState(volunteer.emContactName);
	const [emContactPhone, setEmContactPhone] = useState(volunteer.emContactPhone);
	const [emContactEmail, setEmContactEmail] = useState(volunteer.emContactEmail);
	const [emContactAddress, setEmContactAddress] = useState(volunteer.emContactAddress);
	const [driversLicense, setDriversLicense] = useState(volunteer.driversLicense);
	const [socialSecurity, setSSN] = useState(volunteer.socialSecurity);
	const [approvalStatus, setApproval] = useState(volunteer.approvalStatus);
	const [skills, setSkills] = useState(volunteer.skills);
	const [healthcare, setHealthcare] = useState(false);
	const [greenCleanup, setGreenCleanup] = useState(false);
	const [sports, setSports] = useState(false);
	const [animals, setAnimals] = useState(false);
	const [hospitality, setHospitality] = useState(false);
	const [foodService, setFoodService] = useState(false);


	// need to include PREFERRED CENTER api call to add/edit volunteer functionality
	const update = () => {
		VolunteerService.updateVolunteer({
			username: volunteer.username,
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
			driversLicense: driversLicense,
			socialSecurity: socialSecurity,
			approvalStatus: approvalStatus,
			skills: skills,
		});
		updateSkills();
		console.log("Updated volunteer details.");
	};

	const delVol = () => {
		VolunteerService.deleteVolunteer(volunteer);
		console.log("Deleted volunteer.");
	};

	const updateSkills = () => {
		getSkills();
		console.log(skills);
		for (let i = 0; i < skills.length; i++) {
			VolunteerService.addVolunteerSkill(volunteer.username, skills[i]);
		}
		setSkills([]);
	};
	const getSkills = () => {
		var skillsArray = [];
		// if (healthcare) skillsArray.push("Healthcare");
		// if (greenCleanup) skillsArray.push("Green Cleanup");
		// if (sports) skillsArray.push("Sports");
		// if (animals) skillsArray.push("Animals");
		// if (hospitality) skillsArray.push("Hospitality");
		// if (foodService) skillsArray.push("Food Service");
		skillsArray = VolunteerService.updateVolunteerSkill(volunteer.username);

		skillsArray.forEach((skill) => {
			skills.push(skill);
		});
	};

	const SubmitHandler = (e) => {
		update();
		e.preventDefault();
		alert(`${volunteer.username}'s information has been updated.`);

		//update database with form data
	};

	//Add Skills section (Parker)
	//Selection for education
	//selection for approval status
	//yes or no (radio buttons?) for social security and drivers license

	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>
			<form onSubmit={SubmitHandler}>
				<div className="form-inner">
					<h2> Edit {volunteer.firstName}'s Information </h2>

					<div className="form-group">
						<label htmlFor="firstName">First Name: </label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							required
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name: </label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							required
							onChange={(e) => setlastName(e.target.value)}
							value={lastName}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address: </label>
						<input
							type="text"
							name="address"
							id="address"
							required
							onChange={(e) => setAddress(e.target.value)}
							value={address}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="homePhone">Home Phone: </label>
						<input
							type="text"
							name="homePhone"
							id="homePhone"
							required
							onChange={(e) => setHomePhone(e.target.value)}
							value={homePhone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="workPhone">Work Phone: </label>
						<input
							type="text"
							name="workPhone"
							id="workPhone"
							required
							onChange={(e) => setWorkPhone(e.target.value)}
							value={workPhone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="cellPhone">Cell Phone: </label>
						<input
							type="text"
							name="cellPhone"
							id="cellPhone"
							required
							onChange={(e) => setCellPhone(e.target.value)}
							value={cellPhone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							id="email"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="education">Education: </label>
						<input
							type="text"
							name="education"
							id="education"
							required
							onChange={(e) => setEducation(e.target.value)}
							value={education}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="licenses">Licenses: </label>
						<input
							type="text"
							name="licenses"
							id="licenses"
							required
							onChange={(e) => setLicense(e.target.value)}
							value={licenses}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emConName">Emergency Contact Name: </label>
						<input
							type="text"
							name="emConName"
							id="emConName"
							required
							onChange={(e) => setEmContactName(e.target.value)}
							value={emContactName}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emConPhone">Emergency Contact Phone: </label>
						<input
							type="text"
							name="emConPhone"
							id="emConPhone"
							required
							onChange={(e) => setEmContactPhone(e.target.value)}
							value={emContactPhone}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emConEmail">Emergency Contact Email: </label>
						<input
							type="text"
							name="emConEmail"
							id="emConEmail"
							required
							onChange={(e) => setEmContactEmail(e.target.value)}
							value={emContactEmail}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emConAddress">Emergency Contact Address: </label>
						<input
							type="text"
							name="emConAddress"
							id="emConAddress"
							required
							onChange={(e) => setEmContactAddress(e.target.value)}
							value={emContactAddress}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="dlNumber">Driver's License Number: </label>
						<input
							type="text"
							name="dlNumber"
							id="dlNumber"
							required
							onChange={(e) => setDriversLicense(e.target.value)}
							value={driversLicense}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="ssn">Social Security Number: </label>
						<input
							type="text"
							name="ssn"
							id="ssn"
							required
							onChange={(e) => setSSN(e.target.value)}
							value={socialSecurity}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="skills">Skills: </label>
						<input
							type="text"
							name="skills"
							id="skills"
							onChange={(e) => setSkills(e.target.value)}
							value={skills}
						/>
					</div>
					<Link to="/manageVolunteers">
						<button type="button" class="btn btn-info">
							Back
						</button>
					</Link>
					<button type="submit" class="btn btn-success" onClick={update}>
						Update Volunteer
					</button>
					<button type="submit" class="btn btn-danger" onClick={delVol}>
						Delete Volunteer
					</button>
				</div>
			</form>
		</>
	);
};

export default EditVolunteer;
