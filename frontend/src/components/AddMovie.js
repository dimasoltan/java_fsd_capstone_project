import React, {useState} from 'react';
import axios from "axios";
import {API_URL} from "../utils/AppUtils";
import {Button, Container, Form} from 'react-bootstrap';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    language: '',
    showtime: '',
    price: 0,
  });

  const handleChange = (e) => {
    setMovie({...movie, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/movies`, movie);
    alert('Movie added successfully!');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="p-4 border rounded">
        <h2 className="text-center">Add New Movie</h2>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" placeholder="Title" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control name="genre" placeholder="Genre" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="language">
          <Form.Label>Language</Form.Label>
          <Form.Control name="language" placeholder="Language" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="showtime">
          <Form.Label>Showtime</Form.Label>
          <Form.Control name="showtime" placeholder="Showtime" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Price" onChange={handleChange}/>
        </Form.Group>
        <Button type="submit" className="w-100 mt-3">Add Movie</Button>
      </Form>
    </Container>
  );
}

export default AddMovie;