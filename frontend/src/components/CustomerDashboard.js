import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Logout from "./Logout";
import {Link} from "react-router-dom";

function CustomerDashboard() {
  let user = sessionStorage.getItem("user");
  return (
    <Container className="p-4 text-center">
      <h2>Welcome, {user}!
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Logout/>
      </h2>
      <h2 className="text-center">Customer Dashboard</h2>
      <Navbar bg="light" className="mb-3">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
          <Nav.Link as={Link} to="/bookings">Bookings</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default CustomerDashboard;