import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../utils/AppUtils";
import {Button, Container, Form, ListGroup, Modal} from 'react-bootstrap';

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    // Fetch bookings
    const fetchBookings = async () => {
      const response = await axios.get(`${API_URL}/bookings`);
      setBookings(response.data);
    };

    // Fetch movies
    const fetchMovies = async () => {
      const response = await axios.get(`${API_URL}/movies`);
      setMovies(response.data);
    };

    fetchBookings();
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/bookings/${id}`);
    setBookings(bookings.filter(booking => booking.id !== id));
    alert('Booking deleted successfully!');
  };

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    await axios.put(`${API_URL}/bookings/${selectedBooking.id}`, selectedBooking);
    setBookings(bookings.map(booking =>
      booking.id === selectedBooking.id ? selectedBooking : booking
    ));
    setShowEditModal(false);
    alert('Booking updated successfully!');
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSelectedBooking({...selectedBooking, [name]: value});
  };

  // Find movie details for each booking
  const getMovieDetails = (movieId) => {
    return movies.find(movie => movie.id === movieId);
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Manage Bookings</h2>
      <ListGroup>
        {bookings.map(booking => {
          const movie = getMovieDetails(booking.movieId);
          return (
            <ListGroup.Item key={booking.id} className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{movie?.title || "Unknown Movie"}</strong> - {movie?.genre || "N/A"} - {movie?.language || "N/A"}
                <br/>
                Seats: {booking.seats} - Price per Seat: ${movie?.price || "N/A"}
              </div>
              <div>
                <Button variant="secondary" className="me-2" onClick={() => handleEdit(booking)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Seats</Form.Label>
                <Form.Control
                  type="number"
                  name="seats"
                  value={selectedBooking.seats}
                  onChange={handleChange}
                  min="1"
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageBooking;