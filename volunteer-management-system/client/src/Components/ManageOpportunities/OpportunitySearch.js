import React, { useState } from "react";
import { Link } from "react-router-dom";
import OpportunityTable from "./OpportunityTable";

const OpportunitySearch = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const selectChange = (e) => {
		setFilter(e.target.value);
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
				<div className="px-2">
					<Link to="/addOpportunity">
						<button className=" btn btn-success">New Opportunity</button>
					</Link>
				</div>
			</div>

			<OpportunityTable search={search} filter={filter} />
		</>
	);
};

export default OpportunitySearch;
