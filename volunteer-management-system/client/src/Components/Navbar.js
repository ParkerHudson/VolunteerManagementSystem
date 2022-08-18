//Logo to return to main menu.
//logout button to return to login screen

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const NavbarComponent = (props) => {
	const { isAuthenticated, user, setIsAuthenticated, setUser } =
		useContext(AuthContext);

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const unauthenticatedNavBar = () => {
		return (
			<>
				<Navbar>
					<NavbarBrand href="/">V M S</NavbarBrand>
				</Navbar>
			</>
		);
	};

	const authenticatedNavBar = () => {
		return (
			<Navbar>
				<NavbarBrand href="/">V M S</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Manage
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to="/manageVolunteers" className="dropdown-item">
										Volunteers
									</Link>
								</DropdownItem>
								<DropdownItem>
									<Link to="/manageOpportunities" className="dropdown-item">
										Opportunities
									</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<button
								type="button"
								className="btn btn-link nav-item nav-link"
								onClick={onClickLogoutHandler}
							>
								Logout
							</button>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	};

	const onClickLogoutHandler = () => {
		AuthService.logout().then((data) => {
			setIsAuthenticated(false);
		});
	};

	return (
		<nav
			className="navbar navbar-dark navbar-expand-sm bg-dark"
			style={{
				backgroundImage: "linear-gradient(to bottom right, #ffce00, #fe4880)",
			}}
		>
			<ul className="navbar-nav">
				{!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
			</ul>
		</nav>
	);
};

export default NavbarComponent;
