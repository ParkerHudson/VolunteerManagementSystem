import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OpportunityTable from "./OpportunityTable";
import VolunteerService from "../../Services/VolunteerService";

const OpportunitySearch = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");
	const [toggle, setToggle] = useState(false);
	const [centers, setCenters] = useState([]);
	const [ctrNames, setCtrNames] = useState([]);
	const [selectedCenter, setSelectedCenter] = useState("all");

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

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const selectChange = (e) => {
		if (e.target.value == "byCenter") {
			setToggle(true);
			setFilter(e.target.value);
		} else {
			setToggle(false);
			setFilter(e.target.value);
		}
	};
	const centerFilterChange = (e) => {
		setSelectedCenter(e.target.value);
	};

	return (
		<>
			<div className="mb-2 d-flex align-items-center">
				<div className="position-relative w-50">
					<span className="position-absolute search">
						<i className="fa fa-search"></i>
					</span>
					<input
						style={{ paddingLeft: 32 }}
						className="form-control w-100"
						placeholder="Search by center name . . ."
						onChange={onChange}
						onSubmit={onSubmit}
					/>
				</div>
				<div className="px-2">
					<select className="form-select" onChange={selectChange}>
						<option value="starter" defaultValue hidden>
							Filters
						</option>
						<option value="none">All</option>
						<option value="recent">Most Recent (60 days)</option>
						<option value="byCenter">By Center</option>
					</select>
				</div>
				{toggle ? (
					<div className="px-2">
						<select
							className="form-select"
							id="prefCenterSelector"
							onChange={centerFilterChange}
						>
							<option value="all" defaultValue>
								All
							</option>
							{centers.map((center) => {
								return <option value={center.key}>{center.key}</option>;
							})}
						</select>
					</div>
				) : (
					<></>
				)}

				<div className="px-2">
					<Link to="/addOpportunity">
						<button className=" btn btn-success">New Opportunity</button>
					</Link>
				</div>
			</div>

			<OpportunityTable
				search={search}
				filter={filter}
				centerName={selectedCenter}
			/>
		</>
	);
};

export default OpportunitySearch;
