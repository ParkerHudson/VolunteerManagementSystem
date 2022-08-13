//import React, { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Components/Home";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
  console.log(user);
  console.log(isAuthenticated);
  return <Home />;
}

export default App;
