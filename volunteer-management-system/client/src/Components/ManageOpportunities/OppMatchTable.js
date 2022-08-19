import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import OppMatchRow from "./OppMatchRow";
import VolunteerService from "../../Services/VolunteerService";

const OppMatchTable = (props) => {
    const [oppMatches, setOppMatches] = useState([]);
    const location = useLocation();
	const { volunteer } = location.state;

    useEffect(() => {
        VolunteerService.getOpportunityMatches(volunteer).then((data) => {
            setOppMatches(data);
        });
    }, [props.volunteer]);

    return (
        <>
            <table className="table table-hover table-sm ">
				<thead className="table-dark">
					<tr>
						<th className="col-sm-1">Opportunity ID</th>
						<th className="col-sm-1">Center Name</th>
						<th className="col-sm-1">Category</th>
						<th className="col-sm-1">Date</th>
						<th className="col-sm-1">Time</th>
						<th className="col-sm-1">Details</th>
					</tr>
				</thead>
				<tbody>
					{oppMatches.length > 0 ? (
						oppMatches.map((opportunity) => {
							return (
								<OppMatchRow
									key={opportunity.oppID}
									opportunity={opportunity}
								/>
							);
						})
					) : (
						<h3>No opportunity matches found . . .</h3>
					)}
				</tbody>
			</table>
        </>
    );
};

export default OppMatchTable;
