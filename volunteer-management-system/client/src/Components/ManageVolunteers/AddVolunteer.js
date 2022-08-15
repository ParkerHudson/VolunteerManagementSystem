//Form to add volunteer to DB
import React from "react";
//import { stripBasename } from "react-router/lib/router";
import { useState } from "react";
import VolunteerService from "../../Services/VolunteerService";

/*const handleSubmit = (e) => {



	e.preventDefault();


	//update database with form data
};*/

//SAMPLE INPUT FOR VolunteerService.postVolunteer (it needs to be in a JSON object)
/* VolunteerService.postVolunteer({
	username: "testedAdd",
	firstName: "Jarry",
	lastName: "Jones",
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
}) */

const AddVolunteer = (props) => {
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`${name}`);

		//update database with form data
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-inner">
				<h2> Add a Volunteer </h2>

				<div className="form-group">
					<label htmlFor="firstName">First Name: </label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name: </label>
					<input type="text" name="lastName" id="lastName" required />
				</div>
				<div className="form-group">
					<label htmlFor="address">Address: </label>
					<input type="text" name="address" id="address" required />
				</div>
				<div className="form-group">
					<label htmlFor="homePhone">Home Phone: </label>
					<input type="text" name="homePhone" id="homePhone" required />
				</div>
				<div className="form-group">
					<label htmlFor="workPhone">Work Phone: </label>
					<input type="text" name="workPhone" id="workPhone" required />
				</div>
				<div className="form-group">
					<label htmlFor="cellPhone">Cell Phone: </label>
					<input type="text" name="cellPhone" id="cellPhone" required />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input type="text" name="email" id="email" required />
				</div>
				<div className="form-group">
					<label htmlFor="education">Education: </label>
					<input type="text" name="education" id="education" required />
				</div>
				<div className="form-group">
					<label htmlFor="licenses">Licenses: </label>
					<input type="text" name="licenses" id="licenses" required />
				</div>
				<div className="form-group">
					<label htmlFor="emConName">Emergency Contact Name: </label>
					<input type="text" name="emConName" id="emConName" required />
				</div>
				<div className="form-group">
					<label htmlFor="emConPhone">Emergency Contact Phone: </label>
					<input type="text" name="emConPhone" id="emConPhone" required />
				</div>
				<div className="form-group">
					<label htmlFor="emConEmail">Emergency Contact Email: </label>
					<input type="text" name="emConEmail" id="emConEmail" required />
				</div>
				<div className="form-group">
					<label htmlFor="emConAddress">Emergency Contact Address: </label>
					<input type="text" name="emConAddress" id="emConAddress" required />
				</div>
				<div className="form-group">
					<label htmlFor="dlNumber">Driver's License Number: </label>
					<input type="text" name="dlNumber" id="dlNumber" required />
				</div>
				<div className="form-group">
					<label htmlFor="ssn">Social Security Number: </label>
					<input type="text" name="ssn" id="ssn" required />
				</div>

				<div className="form-group">
					<label htmlFor="skills">Skills: </label>
					<input type="text" name="skills" id="skills" />
				</div>

				<button>Submit</button>
			</div>
		</form>
	);
};

export default AddVolunteer;
