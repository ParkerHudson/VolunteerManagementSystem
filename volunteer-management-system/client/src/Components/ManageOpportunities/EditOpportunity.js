//Take in opportunity object, display current values, allow changes, push updated object to DB

import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import OpportunityService from "../../Services/OpportunityService";
import { Link } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

const EditOpportunity = (props) => {
  const location = useLocation();
  const { opportunity } = location.state;
  const [ctrName, setCtrName] = useState(opportunity.ctrName);
  const [category, setCategory] = useState(opportunity.category);
  const [time, setTime] = useState(new Date(opportunity.time));

  const editOppor = () => {
    OpportunityService.updateOpp({
      ctrName: ctrName,
      category: category,
      time: time,
    });
  };

  console.log("Edited opportunity.");

  const SubmitHandler = (e) => {
    e.preventDefault();
    editOppor();

    window.alert("Opportunity edited successfully");

    //update database with form data
  };

  const delOppor = () => {
    OpportunityService.deleteOpp(opportunity);
    console.log("Deleted volunteer.");
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="form-inner">
          <h2> Edit Opportunity </h2>
          <div className="form-group">
            <label htmlFor="ctrName">Center Name: </label>
            <input
              type="text"
              value={ctrName}
              onChange={(e) => setCtrName(e.target.value)}
              required
            />

            <div className="form-group">
              <label htmlFor="category">Category:</label>

              <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Animals">Animals</option>
                <option value="Food">Food</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>

          <DateTimePicker
						className="datePicker"
						onChange={setTime}
						value={time}
					/>
<br></br><br></br><br></br>
            <Link to="/manageOpportunities">
              <button type="button" class="btn btn-info">
                Back
              </button>
            </Link>
			
            <button type="submit" class="btn btn-success" onClick={editOppor}>
              Edit Opportunity
            </button>
            <button type="submit" class="btn btn-danger" onClick={delOppor}>
              Delete Opportunity
            </button>
            </div>
      </form>
    </>
  );
};

export default EditOpportunity;
