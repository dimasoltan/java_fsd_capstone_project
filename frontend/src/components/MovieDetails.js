import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import {API_URL} from "../utils/AppUtils";
import {Card, Container} from 'react-bootstrap';

function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`${API_URL}/movies/${movieId}`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <Container className="p-4">
      {movie && (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Genre: {movie.genre}</Card.Text>
            <Card.Text>Language: {movie.language}</Card.Text>
            <Card.Text>Showtime: {movie.showtime}</Card.Text>
            <Card.Text>Price: ${movie.price}</Card.Text>
            <Link to={`/book/${movie.id}`} className="btn btn-primary w-100">Book Now</Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default MovieDetails;