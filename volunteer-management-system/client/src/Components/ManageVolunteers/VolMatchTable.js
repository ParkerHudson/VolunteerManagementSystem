import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VolMatchRow from "./VolMatchRow";
import OpportunityService from "../../Services/OpportunityService";

const VolMatchTable = (props) => {
    const [volMatches, setVolMatches] = useState([]);
    const location = useLocation();
	const { opportunity } = location.state;

    useEffect(() => {
		OpportunityService.getVolunteerMatches(opportunity).then((data) => {
			setVolMatches(data);
		});
	}, [props.opportunity]);

    return (
        <>
            <table className="table table-hover table-sm ">
				<thead className="table-dark">
					<tr>
						<th className="col-sm-1">Username</th>
						<th className="col-sm-1">Name</th>
						<th className="col-sm-1">Email</th>
						<th className="col-sm-1" style={{ textAlign: "center" }}>
							Approval Status
						</th>
						<th className="col-sm-1">Details</th>
					</tr>
				</thead>
				<tbody>
					{volMatches.length > 0 ? (
						volMatches.map((volunteer) => {
							return (
								<VolMatchRow key={volunteer.username} volunteer={volunteer} />
							);
						})
					) : (
						<h3>No volunteer matches found . . .</h3>
					)}
				</tbody>
			</table>
        </>
    )
};

export default VolMatchTable;