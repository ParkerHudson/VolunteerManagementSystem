//import React, { useState } from "react";
import React from "react";
import Home from "./Components/Home";
import NavbarComponent from "./Components/Navbar";
import EditVolunteer from "./Components/ManageVolunteers/EditVolunteer";
import AddVolunteer from "./Components/ManageVolunteers/AddVolunteer";
import VolunteerMatches from "./Components/ManageVolunteers/VolunteerMatches";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VolunteerController from "./Components/ManageVolunteers/VolunteerController";
import VolunteerView from "./Components/ManageVolunteers/VolunteerView";
import AddOpportunity from "./Components/ManageOpportunities/AddOpportunity";
import EditOpportunity from "./Components/ManageOpportunities/EditOpportunity";
import OpportunityController from "./Components/ManageOpportunities/OpportunityController";
import OpportunityMatches from "./Components/ManageOpportunities/OpportunityMatches";
import OpportunityView from "./Components/ManageOpportunities/OpportunityView";
import PrivateRoute from "./hocs/PrivateRoute";

function App() {
	return (
		<Router>
			<NavbarComponent />
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route
					path="/addVolunteer"
					element={
						<PrivateRoute>
							<AddVolunteer />
						</PrivateRoute>
					}
				/>
				<Route
					path="/editVolunteer"
					element={
						<PrivateRoute>
							<EditVolunteer />
						</PrivateRoute>
					}
				/>
				<Route
					path="/manageVolunteers"
					element={
						<PrivateRoute>
							<VolunteerController />
						</PrivateRoute>
					}
				/>
				<Route
					path="/volunteerMatches"
					element={
						<PrivateRoute>
							<VolunteerMatches />
						</PrivateRoute>
					}
				/>
				<Route
					path="/viewVolunteerInfo"
					element={
						<PrivateRoute>
							<VolunteerView />
						</PrivateRoute>
					}
				/>
				<Route
					path="/addOpportunity"
					element={
						<PrivateRoute>
							<AddOpportunity />
						</PrivateRoute>
					}
				/>
				<Route
					path="/editOpportunity "
					element={
						<PrivateRoute>
							<EditOpportunity />
						</PrivateRoute>
					}
				/>
				<Route
					path="/manageOpportunities"
					element={
						<PrivateRoute>
							<OpportunityController />
						</PrivateRoute>
					}
				/>
				<Route
					path="/OpportunityMatches"
					element={
						<PrivateRoute>
							<OpportunityMatches />
						</PrivateRoute>
					}
				/>
				<Route
					path="/viewOpportunityInfo"
					element={
						<PrivateRoute>
							<OpportunityView />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
