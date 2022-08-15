//import React, { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import EditVolunteer from "./Components/ManageVolunteers/EditVolunteer";
import AddVolunteer from "./Components/ManageVolunteers/AddVolunteer";
import VolunteerMatches from "./Components/ManageVolunteers/VolunteerMatches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VolunteerController from "./Components/ManageVolunteers/VolunteerController";

function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/addVolunteer" element={<AddVolunteer />} />
				<Route path="/editVolunteer" element={<EditVolunteer />} />
				<Route path="/manageVolunteers" element={<VolunteerController />} />
				<Route path="/volunteerMatches" element={<VolunteerMatches />} />
			</Routes>
		</Router>
	);
}

export default App;
