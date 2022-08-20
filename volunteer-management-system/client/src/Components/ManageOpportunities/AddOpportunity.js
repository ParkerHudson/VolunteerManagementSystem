//Form to input opportunity data to DB

import React from "react";
import { useState } from "react";
import OpportunityService from "../../Services/OpportunityService";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

const AddOpportunity = () => {
	const [ctrName, setCtrName] = useState("");
	const [category, setCategory] = useState("");
	const [testTime, setTestTime] = useState(new Date());

	const addOpp = () => {
		OpportunityService.addCenter(ctrName);
		OpportunityService.addOpp(ctrName, category, testTime);
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
						<label htmlFor="ctrName" className="form-label">
							Center Name
						</label>
						<input
							type="text"
							value={ctrName}
							className="form-control"
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
							<label htmlFor="category" className="form-label">
								Category
							</label>

							<select
								name="category"
								id="category"
								className="form-select"
								onChange={(e) => setCategory(e.target.value)}
								required
							>
								<option value="starter" defaultValue hidden>
									Select...
								</option>
								<option value="Animals">Animals</option>
								<option value="Food">Food</option>
								<option value="Hospitality">Hospitality</option>
								<option value="Sports">Sports</option>
								<option value="Green Cleanup">Green Cleanup</option>
								<option value="Healthcare">Healthcare</option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="approval" className="form-label">
							Time
						</label>
					</div>
					<DateTimePicker
						className="datePicker"
						onChange={setTestTime}
						value={testTime}
					/>
					<br></br>
					<br></br>

					<br></br>
					<br></br>
					<div className="row">
						<div className="col-1">
							<Link to="/manageOpportunities">
								<button type="button" class="btn btn-info">
									Back
								</button>
							</Link>
						</div>
						<div className="col-1">
							<button type="submit" class="btn btn-success">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddOpportunity;
