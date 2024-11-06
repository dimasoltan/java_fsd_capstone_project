import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../utils/AppUtils";
import {Button, Container, Form, ListGroup} from 'react-bootstrap';

const EditMovie = () => {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [updatedMovie, setUpdatedMovie] = useState({
    title: '',
    genre: '',
    language: '',
    showtime: '',
    price: 0,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${API_URL}/movies`);
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/movies/${id}`);
    setMovies(movies.filter(movie => movie.id !== id));
    alert('Movie deleted successfully!');
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie.id);
    setUpdatedMovie(movie);
  };

  const handleChange = (e) => {
    setUpdatedMovie({...updatedMovie, [e.target.name]: e.target.value});
  };

  const handleUpdate = async () => {
    await axios.put(`${API_URL}/movies/${editingMovie}`, updatedMovie);
    setMovies(movies.map(movie => (movie.id === editingMovie ? updatedMovie : movie)));
    setEditingMovie(null);
    alert('Movie updated successfully!');
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Edit Movies</h2>
      <ListGroup>
        {movies?.map(movie => (
          <ListGroup.Item key={movie.id} className="d-flex justify-content-between align-items-center">
            {editingMovie === movie.id ? (
              <Form className="w-100">
                <Form.Group controlId="title" className="mb-2">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={updatedMovie.title}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="genre" className="mb-2">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={updatedMovie.genre}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="language" className="mb-2">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    name="language"
                    value={updatedMovie.language}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="showtime" className="mb-2">
                  <Form.Label>Showtime</Form.Label>
                  <Form.Control
                    type="text"
                    name="showtime"
                    value={updatedMovie.showtime}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="price" className="mb-2">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={updatedMovie.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" className="me-2" onClick={handleUpdate}>
                  Save
                </Button>
                <Button variant="secondary" onClick={() => setEditingMovie(null)}>
                  Cancel
                </Button>
              </Form>
            ) : (
              <>
                <span>{movie.title} - {movie.genre} - ${movie.price}</span>
                <div>
                  <Button variant="secondary" className="me-2" onClick={() => handleEdit(movie)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(movie.id)}>
                    Delete
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default EditMovie;