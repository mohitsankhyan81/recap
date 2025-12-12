import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setdata] = useState([]);
  const [todo, settodo] = useState('');
  const [editid, seteditid] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:2522/todos")
      .then(res => setdata(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.trim() === '') return;

    if(editid){
      axios.put(`http://localhost:2522/todos/${editid}`, { text: todo })
        .then(res => {
          setdata(data.map(d => d._id === editid ? res.data : d));
          settodo('');
          seteditid(null);
        });
    } else {
      axios.post("http://localhost:2522/todos", { text: todo })
        .then(res => setdata([...data, res.data]));
      settodo('');
    }
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2522/todos/${id}`)
      .then(() => setdata(data.filter(e => e._id !== id)));
  }

  const handleEdit = (e) => {
    settodo(e.text);
    seteditid(e._id);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Daily Tasks</h1>
      
      <form onSubmit={handleSubmit} className="flex mb-6 w-full max-w-md">
        <input 
          type="text"
          placeholder='Enter your task' 
          value={todo}
          onChange={e => settodo(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md"
        >
          {editid ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2">
        {data.map(e => (
          <li key={e._id} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <span>{e.text}</span>
            <div className="space-x-2">
              <button 
                onClick={() => handleEdit(e)} 
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(e._id)} 
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
