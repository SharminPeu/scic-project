import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../image/clean logo.png"
// import useAuth from "../../../Firebase/hooks/UseAuth";
// import bg from "../../../components/image/logo/watch.jpg";

const Menubar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <div className="d-flex align-items-center">
              <img style={{ width: "40px" }} className="me-2" src={bg} alt="" />
              <div>
                <p className="mb-0 lh-1">
                  HandyVai
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Services
              </Nav.Link>
              {user?.email && (
                <>
                  <Nav.Link as={NavLink} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {user?.displayName && (
              <Navbar.Text>
                <span className="text-white me-2">{user?.displayName}</span>
              </Navbar.Text>
            )}
            {user?.displayName ? (
              <button
                onClick={logOut}
                className="btn btn-success text-white py-1"
              >
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary text-white">LogIn</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <button className="btn btn-primary text-white">
                    Register
                  </button>
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
