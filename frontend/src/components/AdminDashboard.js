import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
import Logout from "./Logout";
import React from "react";

function AdminDashboard() {
  let user = sessionStorage.getItem("user");
  return (
    <Container className="p-4">
      <h2>Welcome, {user}!
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Logout/>
      </h2>
      <h2 className="text-center">Admin Dashboard</h2>
      <Navbar bg="light" className="mb-3">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/admin/add-movie">Add New Movie</Nav.Link>
          <Nav.Link as={Link} to="/admin/edit-movies">Edit Movies</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default AdminDashboard;