import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [data, setdata] = useState([]);
  const [todo, settodo] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3434/todos")
    .then(res => setdata(res.data));
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;

    axios.post("http://localhost:3434/todos", { text: todo })
    .then(res => setdata([...data, res.data]));

    settodo('');
  }

  const deletetodo = (id) => {
    axios.delete(`http://localhost:3434/todos/${id}`)
    .then(() => setdata(data.filter(e => e._id!==id)))
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <form onSubmit={HandleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your task"
          value={todo}
          onChange={e => settodo(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {data.map((e) => (
          <li key={e._id}>
            {e.text}
            <button onClick={() => deletetodo(e._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
