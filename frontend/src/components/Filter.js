import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';

function Filter({onFilter}) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({title, genre, language});
  };

  return (
    <Container className="p-3 mb-4 bg-light rounded">
      <h4>Filter Movies</h4>
      <Form onSubmit={handleSubmit} className="d-flex gap-3">
        <Form.Control
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Form.Control
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <Button type="submit" variant="primary">Apply Filter</Button>
      </Form>
    </Container>
  );
}

export default Filter;