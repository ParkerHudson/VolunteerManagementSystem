//Search for volunteers, pass value to VolunteerTable
//Add volunteer button on right side.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VolunteerTable from "./VolunteerTable";

const VolunteerSearch = () => {
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
						placeholder="Search by username . . ."
						onChange={onChange}
						onSubmit={onSubmit}
					/>
				</div>
				<div className="px-2">
					<select className="form-select" onChange={selectChange}>
						<option value="starter" defaultValue hidden>
							Approval Status
						</option>
						<option value="none">All</option>
						<option value="approved">Approved</option>
						<option value="approved & pending">Approved & Pending</option>
						<option value="pending">Pending</option>
						<option value="disapproved">Disapproved</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>
				<div className="px-2">
					<Link to="/addVolunteer">
						<button className=" btn btn-success">Add Volunteer</button>
					</Link>
				</div>
			</div>

			<VolunteerTable search={search} filter={filter} />
		</>
	);
};

export default VolunteerSearch;
