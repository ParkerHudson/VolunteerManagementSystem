import React, { useState, useEffect, useContext } from "react";
import AuthService from "../Services/AuthService";
import AdminPanel from "./AdminPanel";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";

const LoginInfo = () => {
	const [details, setDetails] = useState({ userId: "", password: "" });
	const [message, setMessage] = useState(null);
	const authContext = useContext(AuthContext);

	const sumbitHandler = (e) => {
		e.preventDefault();
		LoginHandler(details);
	};

	const LoginHandler = (details) => {
		AuthService.login(details).then((data) => {
			if (data.isAuthenticated) {
				setDetails({ userId: "", password: "" });
				setMessage(null);
				authContext.setIsAuthenticated(true);
			} else {
				console.log(data);
				setMessage(data.msg);
				console.log(message);
			}
		});
	};

<<<<<<< HEAD
  return (
    <form onSubmit={sumbitHandler}>
      <div className="form-inner">
        <h2> Welcome to the Voluntary Management System</h2>
        {(error !== "") ? (<div className="error">{error}</div> ) : ""}
        
    
        <div className="form-group">
          <label htmlFor="name">Username: </label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
            <label htmlFor="name">Password: </label>
            <input type="password" name="name" id="name" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <button>Login</button>
      </div>
    </form>
  );
}
=======
	/* const Authenticated = (token) => {
		AuthService.isAuthenticated(token).then((data) => {
			//setIsAuthorized(data.isAuthorized);
		});
	}; */

	return (
		<>
			{authContext.isAuthenticated ? (
				<>
					<AdminPanel />
				</>
			) : (
				<>
					<div>
						<form onSubmit={sumbitHandler}>
							<div className="form-inner">
								<h2> Welcome to the Volunteer Management System</h2>

								<div className="form-group">
									<label htmlFor="username">Username: </label>
									<input
										type="text"
										name="username"
										id="username"
										onChange={(e) =>
											setDetails({ ...details, userId: e.target.value })
										}
										value={details.userId}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password: </label>
									<input
										type="password"
										name="password"
										id="password"
										onChange={(e) =>
											setDetails({ ...details, password: e.target.value })
										}
										value={details.password}
									/>
								</div>
								<button className="btn btn-primary">Login</button>
							</div>
						</form>
						{message ? <Message message={message} /> : null}
					</div>
				</>
			)}
		</>
	);
};
>>>>>>> 3d1f018a32941a9199e392f66488b581898c0003

export default LoginInfo;
