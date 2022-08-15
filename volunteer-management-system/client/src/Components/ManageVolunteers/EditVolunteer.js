//Take in volunteer object.
//Display current data.
//Allow user to edit data and save to db
//Delete volunteer button
//back button to return to previous view

//WIP
import React from "react";
import { useLocation } from "react-router-dom";
import VolunteerService from "../../Services/VolunteerService";

// VolunteerService.updateVolunteer({
// 	username: "mmw",
// 	firstName: "Mirs",
// 	lastName: "Jones",
// 	address: "11134 Tester Dr",
// 	homePhone: "9042224921",
// 	workPhone: "3232221234",
// 	cellPhone: "3334442322",
// 	email: "Testy@tester.com",
// 	education: "bachelors",
// 	licenses: "None",
// 	emContactName: "Jane",
// 	emContactPhone: "9994443333",
// 	emContactEmail: "helpMe@helper.com",
// 	emContactAddress: "32455 Help Lane",
// 	driversLicense: 1,
// 	socialSecurity: 1,
// 	approvalStatus: "approved",
// 	skills: "some skill here",
// })

const EditVolunteer = (props) => {
	const location = useLocation();
	const { volunteer } = location.state;

	//volunteer is the volunteer object that is being passed to the component from the row component
	return (
		<>
			<h1>{volunteer.username}</h1>
		</>
	);
};

export default EditVolunteer;
