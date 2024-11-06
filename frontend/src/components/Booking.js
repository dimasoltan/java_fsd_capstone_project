import React, {useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_URL} from "../utils/AppUtils";
import {Button, Container, Form} from 'react-bootstrap';

const Booking = () => {
  const {movieId} = useParams();
  const [seats, setSeats] = useState(1);

  const handleBooking = async () => {
    await axios.post(`${API_URL}/bookings`, {movieId, seats});
    alert('Booking successful!');
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Book Tickets</h2>
      <Form.Group controlId="seats" className="mb-3">
        <Form.Label>Number of Seats</Form.Label>
        <Form.Control
          type="number"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          min="1"
        />
      </Form.Group>
      <Button onClick={handleBooking} className="w-100">Book Now</Button>
    </Container>
  );
}

export default Booking;