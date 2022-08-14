//import React, { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
	return <Home />;
//   return (
//  <Router>
//   <Navbar>
//     <Route exact path="/" component={Home}/>
//   </Navbar>
// </Router> 
//   )


  
}

export default App;
