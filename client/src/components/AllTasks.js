import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.filter((task) => task._id !== id));
        console.log(data.message);
      })
      .catch((error) => console.log(error));
  };

  function nav (){
    navigate("/addTask")
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Level</th>
          <th>Date of Completion</th>
          <th>Actions <Button variant="primary" onClick={nav} type="submit">
        Add Task
      </Button></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.level}</td>
            <td>{task.dateOfCompletion}</td>
            <td>
              <Link to={`/editTask/${task._id}`}>
                <Button variant="warning" className="mx-1">
                  Edit
                </Button>
              </Link>
              <Button
                variant="danger"
                className="mx-1"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllTasks;
