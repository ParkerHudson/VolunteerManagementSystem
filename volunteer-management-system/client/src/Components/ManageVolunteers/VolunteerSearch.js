//Search for volunteers, pass value to VolunteerTable
//Add volunteer button on right side.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VolunteerTable from "./VolunteerTable";

const VolunteerSearch = () => {
	const [search, setSearch] = useState("");

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="mb-2 d-flex align-items-center">
				<div className="position-relative w-75">
					<span className="position-absolute search">
						<i className="fa fa-search"></i>
					</span>
					<input
						style={{ paddingLeft: 32 }}
						className="form-control"
						placeholder="Search by username . . ."
						onChange={onChange}
						onSubmit={onSubmit}
					/>
				</div>
				<div className="px-2">
					<span>
						Filters <i className="fa fa-angle-down"></i>
					</span>
				</div>

				<div className="px-2">
					<Link to="/addVolunteer">Add Volunteer</Link>
				</div>
			</div>
			<VolunteerTable search={search} />
		</>
	);
};

export default VolunteerSearch;
