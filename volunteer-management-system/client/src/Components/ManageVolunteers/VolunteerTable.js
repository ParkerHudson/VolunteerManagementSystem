//Table of volunteers
//Take in filter from filter component and search bar contents, query DB and display table of volunteer row components

import React, { useState, useEffect } from "react";
import VolunteerRow from "./VolunteerRow";
import VolunteerService from "../../Services/VolunteerService";

const VolunteerTable = (props) => {
	const [volunteers, setVolunteers] = useState([]);

	//Get volunteers from DB
	useEffect(() => {
		VolunteerService.getVolunteers("", props.search).then((data) => {
			setVolunteers(data);
		});
	}, [props.search]);

	return (
		<>
			<table className="table table-hover">
				<thead className="table-dark">
					<tr>
						<th>Username</th>
						<th>Name</th>
						<th>Status</th>
						<th colSpan={2}></th>
					</tr>
				</thead>
				<tbody>
					{volunteers != [] ? (
						volunteers.map((volunteer) => {
							return (
								<VolunteerRow key={volunteer.username} volunteer={volunteer} />
							);
						})
					) : (
						<tr>
							<td>none</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default VolunteerTable;
