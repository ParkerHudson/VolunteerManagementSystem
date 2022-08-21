import React from "react";
import AdminPanel from "./AdminPanel";
import LoginInfo from "./LoginInfo";
import "../css/App.css";

const Home = () => {
	//Placeholder for home page. For now redirects to log in page
	return (
		<div className="App">
			<LoginInfo />
		</div>
	);
};

export default Home;
