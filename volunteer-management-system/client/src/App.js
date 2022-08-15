//import React, { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AddVolunteer from "./Components/ManageVolunteers/AddVolunteer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/addVolunteer" element={<AddVolunteer />} />
			</Routes>
		</Router>
	);
}

export default App;
