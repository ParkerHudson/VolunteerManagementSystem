import React, {useState} from "react";

function LoginInfo({ Login, error}) {
const [details, setDetails] = useState({name: "", password: ""})

const sumbitHandler = e => {
    e.preventDefault();

    Login(details)
}

  return (
    <form onSubmit={sumbitHandler}>
      <div className="form-inner">
        <h2> Welcome to the Voluntary Management System</h2>
        {(error != "") ? (<div className="error">{error}</div> ) : ""}
        
    
        <div className="form-group">
          <label htmlFor="name">Username: </label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
            <label htmlFor="name">Password: </label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginInfo;
