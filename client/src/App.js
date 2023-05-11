import { Routes, Route } from 'react-router';
import './App.css';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import SignIn from './components/SignIn';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/tasks" element={<AllTasks />}/>
        <Route path="/addTask" element={<AddTask />}/>
        <Route path="/editTask/:id" element={<EditTask />}/> 

      </Routes>
      
    </div>
  );
}

export default App;
