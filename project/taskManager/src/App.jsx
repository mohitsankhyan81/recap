import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data,setdata]=useState([]);
  const [todo,settodo]=useState('');

  useEffect(()=>{
    axios.get("http://localhost:2522/todos")
    .then((res)=>setdata(res.data));
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(todo.trim()==='')return
    axios.post("http://localhost:2522/todos",{text:todo})
    .then(res=>setdata([...data,res.data]));
    settodo('');
  }

  const handleDelete=(id)=>{
    axios.delete(`http:localhost:2522/todos/${id}`)
    .then(setdata(data.filter(e=>e._id!==id)))
  }
  return (
    <div>
      <h1>Daily task</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Enter your task' 
        value={todo}
        onChange={e=>settodo(e.target.value)}
        />
        <button>
          Submit
        </button>
      </form>

      <ul>
        {data.map((e)=>(
          <li key={e._id}>
            {e.text}
            <button onClick={()=>handleDelete(e._id)}>delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App