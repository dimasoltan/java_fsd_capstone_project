import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../utils/AppUtils";
import {Alert, Button, Container, Form} from 'react-bootstrap';

function SignUp() {
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [typeofuser, setTypeofUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailid || !password || !typeofuser) {
      setError("Please enter email, password, and select user type.");
      return;
    }
    axios.post(`${API_URL}/login/signup`, {emailid, password, typeofuser})
      .then(result => setError(result.data.includes("successfully") ? "" : result.data))
      .then(() => {
        if (error === "") {
          alert("Signup successful!");
          navigate("/");
        }
      })
      .catch(() => setError("Sign up failed. Please try again."));
    setEmailId("");
    setPassword("");
  };

  return (
    <Container className="p-4" style={{maxWidth: "400px"}}>
      <h3 className="text-center">Sign Up</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={emailid} onChange={(e) => setEmailId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Type</Form.Label>
          <Form.Check
            type="radio" name="typeofuser" label="Admin" value="admin"
            onChange={(e) => setTypeofUser(e.target.value)}
          />
          <Form.Check
            type="radio" name="typeofuser" label="Customer" value="user"
            onChange={(e) => setTypeofUser(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="w-100">Sign Up</Button>
      </Form>
      <Button variant="link" className="w-100 mt-3" onClick={() => navigate("/")}>Back to Login</Button>
    </Container>
  );
}

export default SignUp;