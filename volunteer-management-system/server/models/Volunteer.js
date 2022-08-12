class Volunteer {
	firstName = "";
	lastName = "";
	address = "";
	homePhone = "";
	workPhone = "";
	cellPhone = "";
	email = "";
	education = "";
	licenses = "";
	emContactName = "";
	emContactPhone = "";
	emContactEmail = "";
	emContactAddress = "";
	driversLicense = "";
	socialSecurity = "";
	approvalStatus = "";
	skills = "";

	constructor(firstName, lastName, address, homePhone, workPhone, cellPhone, email, education, licenses, emContactName, emContactPhone, emContactEmail, emContactAddress, driversLicense, socialSecurity, approvalStatus, skills) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.homePhone = homePhone;
		this.workPhone = workPhone;
		this.cellPhone = cellPhone;
		this.email = email;
		this.education = education;
		this.licenses = licenses;
		this.emContactName = emContactName;
		this.emContactPhone = emContactPhone;
		this.emContactEmail = emContactEmail;
		this.emContactAddress = emContactAddress;
		this.driversLicense = driversLicense;
		this.socialSecurity = socialSecurity;
		this.approvalStatus = approvalStatus;
		this.skills = skills;
		
		
	}
}

module.exports = Volunteer;
