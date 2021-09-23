import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, ListGroup, Button } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

import "./Nav.scss";

const Navv = (props) => {
  const { currentUser, logout, isAdmin } = useAuth();
  // console.log(currentUser)
  const history = useHistory();
  const logoutUser = async () => {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const { location } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">          
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            activeClassName="isActive"
            className="navbar-brand LinkHome"
            to="/"
          >
            Pradžia
          </NavLink>
          <NavLink
            exact
            activeClassName="isActive"
            className="navbar-brand"
            to="/Apiemus"
          >
            Apie mus
          </NavLink>
          <NavLink
            exact
            activeClassName="isActive"
            className="navbar-brand"
            to="/Priemimas"
          >
            Priėmimas
          </NavLink>
          <NavLink
            exact
            activeClassName="isActive"
            className="navbar-brand"
            to="/Kainos"
          >
            Kainos
          </NavLink>
          <NavLink
            exact
            activeClassName="isActive"
            className="navbar-brand"
            to="/Kontaktai"
          >
            Susisiekite su mumis
          </NavLink>
          {!currentUser && (
            <NavLink
              exact
              activeClassName="isActive"
              className="navbar-brand"
              to="/login"
            >
              Prisijungimas
            </NavLink>
          )}
          {!!currentUser && (
            <ListGroup className="nav-item">
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand"
                to="/paskyra"
              >
                Paskyra
              </NavLink>
            </ListGroup>
          )}
          {!!isAdmin && (
            <ListGroup className="nav-item">
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand"
                to="/admin"
              >
                Admin
              </NavLink>
            </ListGroup>
          )}
          {!!currentUser && (
            <ListGroup className="nav-item">
              <Button onClick={logoutUser}>Atsijungti</Button>
            </ListGroup>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <div className="container-fluid">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <NavLink
    //       exact
    //       activeClassName="isActive"
    //       className="navbar-brand nav-link LinkHome"
    //       to="/"
    //     >
    //       Home
    //     </NavLink>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     {/* <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarTogglerDemo02"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button> */}

    //     {/* <div className="collapse navbar-collapse" id="responsive-navbar-nav"> */}

    //     <Navbar.Collapse id="responsive-navbar-nav">
    //     {/* <div className="navbar-nav"> */}
    //       <div className="navbar-nav">
    //         <NavLink
    //           exact
    //           activeClassName="isActive"
    //           className="navbar-brand nav-link"
    //           to="/a"
    //         >
    //           About us
    //         </NavLink>
    //         <NavLink
    //           exact
    //           activeClassName="isActive"
    //           className="navbar-brand nav-link"
    //           to="/s"
    //         >
    //           Admission
    //         </NavLink>
    //         <NavLink
    //           exact
    //           activeClassName="isActive"
    //           className="navbar-brand nav-link"
    //           to="/c"
    //         >
    //           Contact
    //         </NavLink>

    //         <NavLink
    //           exact
    //           activeClassName="isActive"
    //           className="navbar-brand nav-link"
    //           to="/login"
    //         >
    //           Login
    //         </NavLink>

    //         <NavLink
    //           exact
    //           activeClassName="isActive"
    //           className="navbar-brand nav-link"
    //           to="/p"
    //         >
    //           Pricing
    //         </NavLink>
    //         {!!currentUser && (
    //           <ListGroup className="nav-item">
    //             <NavLink
    //               exact
    //               activeClassName="isActive"
    //               className="navbar-brand nav-link"
    //               to="/paskyra"
    //             >
    //               Private
    //             </NavLink>
    //           </ListGroup>
    //         )}

    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>

    //         {!!isAdmin && (
    //           <ListGroup className="nav-item">
    //             <NavLink
    //               exact
    //               activeClassName="isActive"
    //               className="navbar-brand nav-link"
    //               to="/admin"
    //             >
    //               Admin
    //             </NavLink>
    //           </ListGroup>
    //         )}
    //       </div>
    //     </Navbar.Collapse>
    //   </nav>
    // </div>
  );
};

export default Navv;
