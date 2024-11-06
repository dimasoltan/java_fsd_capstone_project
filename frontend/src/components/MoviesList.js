import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Filter from './Filter';
import {API_URL} from "../utils/AppUtils";
import {Card, Col, Container, Row} from 'react-bootstrap';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${API_URL}/movies`);
      setMovies(response.data);
      setFilteredMovies(response.data);
    };
    fetchMovies();
  }, []);

  const handleFilter = (filterCriteria) => {
    const {title, genre, language} = filterCriteria;
    const filtered = movies.filter(movie =>
      (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
      (genre ? movie.genre.toLowerCase().includes(genre.toLowerCase()) : true) &&
      (language ? movie.language.toLowerCase().includes(language.toLowerCase()) : true)
    );
    setFilteredMovies(filtered);
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Available Movies</h2>
      <Filter onFilter={handleFilter}/>
      <Row>
        {filteredMovies.map(movie => (
          <Col md={4} className="my-3" key={movie.id}>
            <Card>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Genre: {movie.genre}</Card.Text>
                <Card.Text>Language: {movie.language}</Card.Text>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MoviesList;