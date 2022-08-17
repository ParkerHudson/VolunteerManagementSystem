//Form to input opportunity data to DB

import React from "react";
import { useState } from "react";
import OpportunityService from "../../Services/OpportunityService";
import { Link } from "react-router-dom";
//import DateTimePicker from 'react-datetime-picker';

const AddOpportunity = () => {
	const [ctrName, setCtrName] = useState("");
	const [category, setCategory] = useState("");
	const [testTime, setTestTime] = useState("");


	const addOpp = () => {
		OpportunityService.postOpportunity({
			ctrName : ctrName,
			category : category,
			testTime : testTime,
			
		});
		console.log("Added opportunity.");
		
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addOpp();
		
		window.alert("Opportunity Added!");

		//update database with form data
	};

	return (
		
		<>
		<form onSubmit={handleSubmit}>
			<div className="form-inner">
				<h2> Add an Opportunity </h2>
				<div className="form-group">
					<label htmlFor="ctrName">Center Name: </label>
					<input
						type="text"
						value={ctrName}
						onChange={(e) => setCtrName(e.target.value)}
						required
					/>
				
				

				{/*<div className="form-group">
					<label htmlFor="category">Category: </label>
					<input
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						required
					/>
	</div> */}

				<div className="form-group">
					<label htmlFor="category">Category:</label>

					<select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
  						<option value="Animals">Animals</option>
  						<option value="Food">Food</option>
  						<option value="Hospitality">Hospitality</option>
  						<option value="Sports">Sports</option>
					</select>
					</div>
					</div>
	
				<div className="form-group">
					<label htmlFor="testTime">Date &amp; Time: </label>
					<input
						type="text"
						value={testTime}
						onChange={(e) => setTestTime(e.target.value)}
						required
					/>
				
					<br></br><br></br>
					
				
				<br></br><br></br>
				<Link to="/manageVolunteers">
				<button type="button" class="btn btn-info">Back</button>
				</Link>

				<button type="button" class="btn btn-success" onClick={addOpp}>
					Submit
				</button>
			</div>
			</div>
		</form>
			
		</>
	);
};

export default AddOpportunity;
