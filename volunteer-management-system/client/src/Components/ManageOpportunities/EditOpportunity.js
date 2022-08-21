//Take in opportunity object, display current values, allow changes, push updated object to DB

import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import OpportunityService from "../../Services/OpportunityService";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import VolunteerService from "../../Services/VolunteerService";

const EditOpportunity = (props) => {
	const location = useLocation();
	const { opportunity } = location.state;
	const [ctrName, setCtrName] = useState(opportunity.ctrName);
	const [category, setCategory] = useState(opportunity.category);
	const [time, setTime] = useState(new Date(opportunity.time));
	const [centers, setCenters] = useState([]);
	const [addCenterInputToggle, setToggle] = useState([]);
	const [ctrNames, setCtrNames] = useState([]);

	const editOppor = () => {
		if (addCenterInputToggle.length > 0) {
			OpportunityService.addCenter(ctrName).then(() => {
				sendUpdate();
			});
		} else {
			sendUpdate();
		}
	};

	const deleteOpp = () => {
		console.log(opportunity.oppID);
		OpportunityService.deleteOpp(opportunity.oppID).then(() => {
			window.alert("Opportunity Deleted");
			window.location.href = "http://localhost:3000/manageOpportunities";
		});
	};

	const sendUpdate = () => {
		OpportunityService.updateOpp({
			ctrName: ctrName,
			category: category,
			time: new Date(time).toISOString().slice(0, 19).replace("T", " "),
			oppID: opportunity.oppID,
		}).then(() => {
			window.alert("Opportunity Updated");
			window.location.href = "http://localhost:3000/manageOpportunities";
		});
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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.value == "update") {
			editOppor();
		} else {
			deleteOpp();
		}

		//window.alert("Opportunity edited successfully");

		//update database with form data
	};

	const delOppor = () => {
		OpportunityService.deleteOpp(opportunity);
		console.log("Deleted volunteer.");
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

						<select
							required
							className="form-select"
							onChange={checkIfCenterExists}
							id="prefCenterSelector"
						>
							<option value="starter" defaultValue hidden>
								{ctrName}
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
								<option value={opportunity.category} defaultValue hidden>
									{opportunity.category}
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
						onChange={setTime}
						value={time}
					/>
					<br></br>
					<br></br>
					<Link to="/manageOpportunities">
						<button type="button" class="btn btn-primary">
							Back
						</button>
					</Link>

					<button
						type="submit"
						class="btn btn-success "
						value="update"
						onClick={handleSubmit}
					>
						Update Opportunity
					</button>
					<button
						type="submit"
						class="btn btn-danger"
						onClick={handleSubmit}
						value="delete"
					>
						Delete Opportunity
					</button>
				</div>
			</form>
		</>
	);
};

export default EditOpportunity;
