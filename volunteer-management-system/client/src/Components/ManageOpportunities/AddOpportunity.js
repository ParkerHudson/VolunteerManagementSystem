//Form to input opportunity data to DB

import React, { useEffect } from "react";
import { useState } from "react";
import OpportunityService from "../../Services/OpportunityService";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import VolunteerService from "../../Services/VolunteerService";

const AddOpportunity = () => {
	const [ctrName, setCtrName] = useState("");
	const [category, setCategory] = useState("");
	const [testTime, setTestTime] = useState(new Date());
	const [centers, setCenters] = useState([]);
	const [addCenterInputToggle, setToggle] = useState([]);
	const [ctrNames, setCtrNames] = useState([]);

	const addOpp = () => {
		OpportunityService.addOpp(ctrName, category, testTime);
	};

	const handleSubmit = (e) => {
		console.log(testTime);
		if (addCenterInputToggle.length > 0) {
			OpportunityService.addCenter(ctrName).then(() => {
				addOpp();
			});
		} else {
			addOpp();
		}
		e.preventDefault();

		window.alert("Opportunity Added!");
		window.location.href = "http://localhost:3000/manageOpportunities";

		//update database with form data
	};

	const checkIfCenterExists = (e) => {
		setCtrName(e.target.value);
		if (!ctrNames.includes(e.target.value)) {
			setToggle(["Add New Center"]);
		} else {
			setToggle([]);
		}
	};

	//Get centers and store in centers array
	useEffect(() => {
		async function fetchData() {
			// Fetch data
			VolunteerService.getCenters().then((data) => {
				const results = [];
				const centerNames = [];

				// Store results in the results array
				data.forEach((value) => {
					results.push({
						key: value.centerName,
						ctrName: value.centerName,
					});
					centerNames.push(value.centerName);
				});
				// Update the options state
				setCenters([...results]);
				setCtrNames([...centerNames]);
			});
		}

		// Trigger the fetch
		fetchData();
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-inner">
					<h2> Add an Opportunity </h2>
					<div className="form-group">
						<label htmlFor="ctrName" className="form-label">
							Center Name
						</label>

						<select
							required
							className="form-select"
							onChange={checkIfCenterExists}
							id="prefCenterSelector"
						>
							<option value="starter" defaultValue hidden>
								Select...
							</option>
							{centers.map((center) => {
								return <option value={center.key}>{center.key}</option>;
							})}
							<option value="">Add New Center</option>
						</select>
						{addCenterInputToggle.map((x) => {
							return (
								<div className="form-group">
									<label htmlFor="ctrName" className="form-label">
										{x}
									</label>
									<input
										name="newCenterName"
										className="form-control"
										value={ctrName}
										onChange={checkIfCenterExists}
									/>
								</div>
							);
						})}

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
