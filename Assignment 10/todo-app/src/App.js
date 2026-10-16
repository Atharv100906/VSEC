import './App.css';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((item, i) => i !== index));
  }

  return (
    <div className="App">

      <h1>My To-Do List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <p key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </p>
      ))}

    </div>
  );
}

export default App;