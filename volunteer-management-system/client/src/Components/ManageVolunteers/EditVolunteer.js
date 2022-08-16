//Take in volunteer object.
//Display current data.
//Allow user to edit data and save to db
//Delete volunteer button
//back button to return to previous view

//WIP
import React from "react";
import { useLocation } from "react-router-dom";
import VolunteerService from "../../Services/VolunteerService";
import { Link } from "react-router-dom";

const update = () => {
	VolunteerService.updateVolunteer({
		volunteerID: "mmw",
		firstName: "Mirandaaa",
		lastName: "Wheatersss",
		address: "11134 Tester Dr",
		homePhone: "9042224921",
		workPhone: "3232221234",
		cellPhone: "3334442322",
		email: "Testy@tester.com",
		education: "bachelors",
		licenses: "None",
		emContactName: "Jane",
		emContactPhone: "9994443333",
		emContactEmail: "helpMe@helper.com",
		emContactAddress: "32455 Help Lane",
		driversLicense: 1,
		socialSecurity: 1,
		approvalStatus: "approved",
		skills: "some skill here",
	});
	console.log("Updated volunteer details.")
}



const EditVolunteer = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;

	const delVol = () => {
		console.log(volunteer);
		VolunteerService.deleteVolunteer(volunteer);
		console.log("Deleted volunteer.")
	}

	const SubmitHandler = (e) => {
		e.preventDefault();
		alert(`${volunteer.username}`);

		//update database with form data
	};

	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>

			<form onSubmit={SubmitHandler}>
			<div className="form-inner">
				<h2> Edit {volunteer.firstName}'s Information </h2>

				<div className="form-group">
					<label htmlFor="firstName">First Name: </label>
					<input type="text" name="firstName" id="firstName" required value={volunteer.firstName}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name: </label>
					<input type="text" name="lastName" id="lastName" required value={volunteer.lastName}/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Address: </label>
					<input type="text" name="address" id="address" required value={volunteer.address} />
				</div>
				<div className="form-group">
					<label htmlFor="homePhone">Home Phone: </label>
					<input type="text" name="homePhone" id="homePhone" required value={volunteer.homePhone}/>
				</div>
				<div className="form-group">
					<label htmlFor="workPhone">Work Phone: </label>
					<input type="text" name="workPhone" id="workPhone" required value={volunteer.workPhone}/>
				</div>
				<div className="form-group">
					<label htmlFor="cellPhone">Cell Phone: </label>
					<input type="text" name="cellPhone" id="cellPhone" required value={volunteer.cellPhone} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input type="text" name="email" id="email" required value={volunteer.email} />
				</div>
				<div className="form-group">
					<label htmlFor="education">Education: </label>
					<input type="text" name="education" id="education" required value={volunteer.education} />
				</div>
				<div className="form-group">
					<label htmlFor="licenses">Licenses: </label>
					<input type="text" name="licenses" id="licenses" required value={volunteer.licenses}/>
				</div>
				<div className="form-group">
					<label htmlFor="emConName">Emergency Contact Name: </label>
					<input type="text" name="emConName" id="emConName" required value={volunteer.emContactName}/>
				</div>
				<div className="form-group">
					<label htmlFor="emConPhone">Emergency Contact Phone: </label>
					<input type="text" name="emConPhone" id="emConPhone" required value={volunteer.emContactPhone} />
				</div>
				<div className="form-group">
					<label htmlFor="emConEmail">Emergency Contact Email: </label>
					<input type="text" name="emConEmail" id="emConEmail" required value={volunteer.emContactEmail} />
				</div>
				<div className="form-group">
					<label htmlFor="emConAddress">Emergency Contact Address: </label>
					<input type="text" name="emConAddress" id="emConAddress" required value={volunteer.emContactAddress} />
				</div>
				<div className="form-group">
					<label htmlFor="dlNumber">Driver's License Number: </label>
					<input type="text" name="dlNumber" id="dlNumber" required value={volunteer.driversLicense}/>
				</div>
				<div className="form-group">
					<label htmlFor="ssn">Social Security Number: </label>
					<input type="text" name="ssn" id="ssn" required value={volunteer.socialSecurity} />
				</div>

				<div className="form-group">
					<label htmlFor="skills">Skills: </label>
					<input type="text" name="skills" id="skills" value={volunteer.skills} />
				</div>
				<Link to="/manageVolunteers">
				<button type="button" class="btn btn-info">Back</button>
				</Link>
				<button type="button" class="btn btn-primary">Submit</button>
				<button type="button" class="btn btn-success" onClick={update}>Update Volunteer</button>
			<button type="button" class="btn btn-danger" onClick={delVol}>Delete Volunteer</button>
			</div>
		</form>
		</>
	);
};

export default EditVolunteer;
