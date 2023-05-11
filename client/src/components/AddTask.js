import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState(1);
  const [completionDate, setCompletionDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/addTask", {
        title,
        description,
        level,
        completionDate,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formLevel">
        <Form.Label>Level</Form.Label>
        <Form.Control
          as="select"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formCompletionDate">
        <Form.Label>Completion Date</Form.Label>
        <Form.Control
          type="date"
          value={completionDate}
          onChange={(e) => setCompletionDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;
