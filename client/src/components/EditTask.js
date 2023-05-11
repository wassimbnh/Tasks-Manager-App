import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');
  const [dateOfCompletion, setDateOfCompletion] = useState('');
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLevel(response.data.level);
        setDateOfCompletion(response.data.dateOfCompletion);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleDateOfCompletionChange = (event) => {
    setDateOfCompletion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/editTask/${id}`, {
        title,
        description,
        level,
        dateOfCompletion,
      })
      .then((response) => {
        console.log(response.data);
        nav("/tasks")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </Form.Group>

      <Form.Group controlId="level">
        <Form.Label>Level</Form.Label>
        <Form.Control
          type="text"
          value={level}
          onChange={handleLevelChange}
        />
      </Form.Group>

      <Form.Group controlId="dateOfCompletion">
        <Form.Label>Date of Completion</Form.Label>
        <Form.Control
          type="text"
          value={dateOfCompletion}
          onChange={handleDateOfCompletionChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EditTask;
