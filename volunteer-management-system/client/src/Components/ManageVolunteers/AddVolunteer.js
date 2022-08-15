//Form to add volunteer to DB
import React from "react";
//import { stripBasename } from "react-router/lib/router";
import { useState } from "react";


/*const handleSubmit = (e) => {



	e.preventDefault();


	//update database with form data
};*/

const AddVolunteer = (props) => {
	const [name, setName] = useState("");
	
	const handleSubmit = (e) => {



		e.preventDefault();
	alert(`${name}`);
	
		//update database with form data
	}
	return (
		
			<form onSubmit={handleSubmit}>
				<div className="form-inner">
					<h2> Add a Volunteer </h2>
	
					<div className="form-group">
						<label for="firstName">First Name: </label>
						<input type="text" value={name} onChange = {(e)=> setName(e.target.value)} required/>
					</div>
					<div className="form-group">
						<label for="lastName">Last Name: </label>
						<input type="text" name="lastName" id="lastName" required/>
					</div>
					<div className="form-group">
						<label for="address">Address: </label>
						<input type="text" name="address" id="address" required/>
					</div>
					<div className="form-group">
						<label for="homePhone">Home Phone: </label>
						<input type="text" name="homePhone" id="homePhone" required/>
					</div>
					<div className="form-group">
						<label for="workPhone">Work Phone: </label>
						<input type="text" name="workPhone" id="workPhone" required/>
					</div>
					<div className="form-group">
						<label for="cellPhone">Cell Phone: </label>
						<input type="text" name="cellPhone" id="cellPhone" required/>
					</div>
					<div className="form-group">
						<label for="email">Email: </label>
						<input type="text" name="email" id="email" required/>
					</div>
					<div className="form-group">
						<label for="education">Education: </label>
						<input type="text" name="education" id="education" required/>
					</div>
					<div className="form-group">
						<label for="licenses">Licenses: </label>
						<input type="text" name="licenses" id="licenses" required/>
					</div>
					<div className="form-group">
						<label for="emConName">Emergency Contact Name: </label>
						<input type="text" name="emConName" id="emConName" required/>
					</div>
					<div className="form-group">
						<label for="emConPhone">Emergency Contact Phone: </label>
						<input type="text" name="emConPhone" id="emConPhone" required/>
					</div>
					<div className="form-group">
						<label for="emConEmail">Emergency Contact Email: </label>
						<input type="text" name="emConEmail" id="emConEmail" required/>
					</div>
					<div className="form-group">
						<label for="emConAddress">Emergency Contact Address: </label>
						<input type="text" name="emConAddress" id="emConAddress" required/>
					</div>
					<div className="form-group">
						<label for="dlNumber">Driver's License Number: </label>
						<input type="text" name="dlNumber" id="dlNumber" required/>
					</div>
					<div className="form-group">
						<label for="ssn">Social Security Number: </label>
						<input type="text" name="ssn" id="ssn" required/>
					</div>
					
					<div className="form-group">
						<label for="skills">Skills: </label>
						<input type="text" name="skills" id="skills"/>
					</div>

					
					
					<button>Submit</button>
				</div>
			</form>
		
	);
};

export default AddVolunteer;
