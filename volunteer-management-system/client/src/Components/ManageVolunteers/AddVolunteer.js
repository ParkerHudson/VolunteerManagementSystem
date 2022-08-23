//Form to add volunteer to DB
import React, { useEffect } from "react";
//import { stripBasename } from "react-router/lib/router";
import { useState } from "react";
import VolunteerService from "../../Services/VolunteerService";
import { Link } from "react-router-dom";

const AddVolunteer = (props) => {
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [homePhone, setHomePhone] = useState("");
	const [workPhone, setWorkPhone] = useState("");
	const [cellPhone, setCellPhone] = useState("");
	const [email, setEmail] = useState("");
	const [education, setEducation] = useState("");
	const [licenses, setLicenses] = useState("");
	const [emContactName, setEmContactName] = useState("");
	const [emContactPhone, setEmContactPhone] = useState("");
	const [emContactEmail, setEmContactEmail] = useState("");
	const [emContactAddress, setEmContactAddress] = useState("");
	const [dlNumber, setDLNumber] = useState("");
	const [approvalStatus, setApprovalStatus] = useState("");
	const [ssn, setSSN] = useState("");
	const [healthcare, setHealthcare] = useState(false);
	const [greenCleanup, setGreenCleanup] = useState(false);
	const [sports, setSports] = useState(false);
	const [animals, setAnimals] = useState(false);
	const [hospitality, setHospitality] = useState(false);
	const [foodService, setFoodService] = useState(false);
	const [skills, setSkills] = useState([]);
	const [centers, setCenters] = useState([]);
	const [prefCenter, setPrefCenter] = useState("");

	const addVol = () => {
		combineAddress();
		VolunteerService.postVolunteer({
			username: username,
			firstName: firstName,
			lastName: lastName,
			address: combineAddress(),
			homePhone: homePhone,
			workPhone: workPhone,
			cellPhone: cellPhone,
			email: email,
			education: education,
			licenses: licenses,
			emContactName: emContactName,
			emContactPhone: emContactPhone,
			emContactEmail: emContactEmail,
			emContactAddress: emContactAddress,
			driversLicense: dlNumber,
			socialSecurity: ssn,
			approvalStatus: approvalStatus,
			skills: "none",
		}).then((data) => {
			if (data.errorNum == 1062) {
				window.alert("Username already in use");
			} else {
				pushSkills();
				pushPrefCenter();
				relocate();
			}
		});
	};
	const relocate = () => {
		window.alert("Volunteer Added!");
		window.location.href = "http://localhost:3000/manageVolunteers";
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addVol();

		//update database with form data
	};

	const getSkills = () => {
		var skillsArray = [];
		if (healthcare) skillsArray.push("Healthcare");
		if (greenCleanup) skillsArray.push("Green Cleanup");
		if (sports) skillsArray.push("Sports");
		if (animals) skillsArray.push("Animals");
		if (hospitality) skillsArray.push("Hospitality");
		if (foodService) skillsArray.push("Food Service");

		skillsArray.forEach((skill) => {
			skills.push(skill);
		});
	};

	const pushSkills = () => {
		getSkills();

		for (let i = 0; i < skills.length; i++) {
			VolunteerService.addVolunteerSkill(username, skills[i]);
		}
		setSkills([]);
	};

	const pushPrefCenter = async () => {
		VolunteerService.addPrefCtr(username, prefCenter);
	};

	const combineAddress = () => {
		return address + ", " + city + ", " + state + ", " + zip;
	};

	useEffect(() => {
		async function fetchData() {
			// Fetch data
			VolunteerService.getCenters().then((data) => {
				const results = [];

				// Store results in the results array
				data.forEach((value) => {
					results.push({
						key: value.centerName,
						ctrName: value.centerName,
					});
				});
				// Update the options state
				setCenters([{ key: "Select a center", value: "" }, ...results]);
			});
		}

		// Trigger the fetch
		fetchData();
	}, []);

	//Skills checkboxes based off of center pref skills

	return (
		<>
			<h2 className="text-center"> Add a Volunteer </h2>

			<form onSubmit={handleSubmit}>
				<div className="form-inner">
					<div className="row g-3">
						<div className="col-md-6">
							<label for="username" className="form-label">
								Username
							</label>
							<input
								type="text"
								value={username}
								className="form-control"
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Username"
								required
							/>
						</div>
						<div className="col-md-6">
							<label for="email" className="form-label">
								Email
							</label>
							<input
								type="text"
								className="form-control"
								value={email}
								pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="col-md-6">
							<label for="username" className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								value={firstName}
								pattern="^[^±!@£$%^&amp;*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$"
								onChange={(e) => setFirstName(e.target.value)}
								placeholder="First Name"
								required
							/>
						</div>
						<div className="col-md-6">
							<label for="email" className="form-label">
								Last Name
							</label>
							<input
								type="text"
								value={lastName}
								className="form-control"
								pattern="^[^±!@£$%^&amp;*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$"
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Last Name"
								required
							/>
						</div>
						{/* City,State,Zip */}
						<div className="col-12">
							<label for="inputAddress" className="form-label">
								Address
							</label>
							<input
								type="text"
								className="form-control"
								value={address}
								placeholder="1234 Main St"
								onChange={(e) => setAddress(e.target.value)}
								required
							/>
						</div>
						<div className="col-md-6">
							<label for="inputCity" className="form-label">
								City
							</label>
							<input
								type="text"
								className="form-control"
								id="inputCity"
								pattern="^[^±!@£$%^&amp;*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$"
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						<div className="col-md-1">
							<label for="inputState" className="form-label">
								State
							</label>
							<select
								id="inputState"
								className="form-select"
								required
								onChange={(e) => setState(e.target.value)}
							>
								<option selected hidden value="">
									Choose...
								</option>
								<option value="AL">AL</option>
								<option value="AK">AK</option>
								<option value="AR">AR</option>
								<option value="AZ">AZ</option>
								<option value="CA">CA</option>
								<option value="CO">CO</option>
								<option value="CT">CT</option>
								<option value="DC">DC</option>
								<option value="DE">DE</option>
								<option value="FL">FL</option>
								<option value="GA">GA</option>
								<option value="HI">HI</option>
								<option value="IA">IA</option>
								<option value="ID">ID</option>
								<option value="IL">IL</option>
								<option value="IN">IN</option>
								<option value="KS">KS</option>
								<option value="KY">KY</option>
								<option value="LA">LA</option>
								<option value="MA">MA</option>
								<option value="MD">MD</option>
								<option value="ME">ME</option>
								<option value="MI">MI</option>
								<option value="MN">MN</option>
								<option value="MO">MO</option>
								<option value="MS">MS</option>
								<option value="MT">MT</option>
								<option value="NC">NC</option>
								<option value="NE">NE</option>
								<option value="NH">NH</option>
								<option value="NJ">NJ</option>
								<option value="NM">NM</option>
								<option value="NV">NV</option>
								<option value="NY">NY</option>
								<option value="ND">ND</option>
								<option value="OH">OH</option>
								<option value="OK">OK</option>
								<option value="OR">OR</option>
								<option value="PA">PA</option>
								<option value="RI">RI</option>
								<option value="SC">SC</option>
								<option value="SD">SD</option>
								<option value="TN">TN</option>
								<option value="TX">TX</option>
								<option value="UT">UT</option>
								<option value="VT">VT</option>
								<option value="VA">VA</option>
								<option value="WA">WA</option>
								<option value="WI">WI</option>
								<option value="WV">WV</option>
								<option value="WY">WY</option>
							</select>
						</div>
						<div className="col-md-2">
							<label for="inputZip" className="form-label">
								Zip
							</label>
							<input
								type="text"
								className="form-control"
								id="inputZip"
								pattern="^[0-9]{5}$"
								onChange={(e) => setZip(e.target.value)}
							/>
						</div>
						<div className="col-4">
							<label htmlFor="homePhone" className="form-label">
								Home Phone
							</label>
							<input
								type="text"
								value={homePhone}
								pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
								placeholder="(123) 456-7890"
								className="form-control"
								onChange={(e) => setHomePhone(e.target.value)}
								required
							/>
						</div>
						<div className="col-4">
							<label htmlFor="workPhone" className="form-label">
								Work Phone
							</label>
							<input
								type="text"
								value={workPhone}
								pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
								placeholder="(123) 456-7890"
								className="form-control"
								onChange={(e) => setWorkPhone(e.target.value)}
								required
							/>
						</div>
						<div className="col-4">
							<label htmlFor="cellPhone" className="form-label">
								Cell Phone
							</label>
							<input
								type="text"
								value={cellPhone}
								pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
								placeholder="(123) 456-7890"
								className="form-control"
								onChange={(e) => setCellPhone(e.target.value)}
								required
							/>
						</div>
						<div className="col-8">
							<label htmlFor="licenses" className="form-label">
								Licenses
							</label>
							<input
								type="text"
								value={licenses}
								className="form-control"
								placeholder="CDL, Servsafe, Mental Health, etc . . ."
								onChange={(e) => setLicenses(e.target.value)}
								required
							/>
						</div>
						<div className="col-4">
							<label className="form-label">Highest Education</label>
							<select
								value={education}
								className="form-select"
								onChange={(e) => setEducation(e.target.value)}
								required
							>
								<option selected hidden value="">
									Select...
								</option>
								<option value="highSchool">High School Diploma</option>
								<option value="associates">Associate's Degree</option>
								<option value="bachelors">Bachelor's Degree</option>
								<option value="masters">Master's Degree</option>
								<option value="phd">Doctore / PHD</option>
							</select>
						</div>
						<div className="col-2">
							<label className="form-label">Driver's License on file?</label>
							<select
								required
								className="form-select"
								name="dlNumber"
								onChange={(e) => setDLNumber(e.target.value)}
							>
								<option hidden value="">
									Select...
								</option>
								<option value="1">Yes</option>
								<option value="0">No</option>
							</select>
						</div>
						<div className="col-2">
							<label className="form-label">Social Security # on file?</label>
							<select
								required
								className="form-select"
								onChange={(e) => setSSN(e.target.value)}
							>
								<option selected hidden value="">
									Select...
								</option>
								<option value="1">Yes</option>
								<option value="0">No</option>
							</select>
						</div>
						<div className="col-4">
							<div className="align-content-center border">
								<div className="text-center">Skillsets</div>
								<div className="row">
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Animals"
												id="flexCheckDefault"
												onChange={(e) => {
													setAnimals(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Animals
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Food Service"
												id="flexCheckDefault"
												onChange={(e) => {
													setFoodService(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Food Service
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Hospitality"
												id="flexCheckDefault"
												onChange={(e) => {
													setHospitality(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Hospitality
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Sports"
												id="flexCheckDefault"
												onChange={(e) => {
													setSports(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Sports
											</label>
										</div>
									</div>
									<div className="col">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Healthcare"
												id="flexCheckDefault"
												onChange={(e) => {
													setHealthcare(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Healthcare
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value="Green Cleanup"
												id="flexCheckDefault"
												onChange={(e) => {
													setGreenCleanup(e.target.checked);
												}}
											/>
											<label
												className="form-check-label"
												for="flexCheckDefault"
											>
												Green Cleanup
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<label className="form-label">Preferred Center</label>
							<select
								required
								className="form-select"
								onChange={(e) => setPrefCenter(e.target.value)}
								id="prefCenterSelector"
							>
								{centers.map((center) => {
									return <option value={center.key}>{center.ctrName}</option>;
								})}
							</select>
						</div>

						<div className="col-6">
							<label htmlFor="emConName" className="form-label">
								Emergency Contact Name
							</label>
							<input
								type="text"
								value={emContactName}
								className="form-control"
								onChange={(e) => setEmContactName(e.target.value)}
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="emConEmail" className="form-label">
								Emergency Contact Email
							</label>
							<input
								type="text"
								value={emContactEmail}
								pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
								className="form-control"
								onChange={(e) => setEmContactEmail(e.target.value)}
								required
							/>
						</div>
						<div className="col-4">
							<label htmlFor="emConPhone" className="form-label">
								Emergency Contact Phone Number
							</label>
							<input
								type="text"
								value={emContactPhone}
								pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
								placeholder="(123) 456-7890"
								className="form-control"
								onChange={(e) => setEmContactPhone(e.target.value)}
								required
							/>
						</div>
						<div className="col-8">
							<label htmlFor="emConAddress" className="form-label">
								Emergency Contact Address
							</label>
							<input
								type="text"
								value={emContactAddress}
								className="form-control"
								placeholder="1234 Main St City, State Zip"
								onChange={(e) => setEmContactAddress(e.target.value)}
								required
							/>
						</div>
						<div className="col-2">
							<label htmlFor="approval" className="form-label">
								Approval Status
							</label>

							<select
								name="approval"
								id="approval"
								required
								className="form-select"
								onChange={(e) => setApprovalStatus(e.target.value)}
							>
								<option selected hidden value="">
									Select...
								</option>
								<option value="approved">Approved</option>
								<option value="pending">Pending Approval</option>
								<option value="denied">Denied</option>
								<option value="inactive">Inactive</option>
							</select>
						</div>

						<div className="col-12"></div>
						<div className="col-1">
							<Link to="/manageVolunteers">
								<button type="button" className="btn btn-lg btn-primary">
									Back
								</button>
							</Link>
						</div>
						<div className="col-1">
							<button type="submit" className="btn btn-lg btn-success">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddVolunteer;
