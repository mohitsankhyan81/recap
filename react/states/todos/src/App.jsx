import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data,setdata]=useState([]);
  const [todo,settodo]=useState("");

  const SubmitHandler=(e)=>{
    e.preventDefault()
    if(todo.trim==="")return
    setdata([...data,todo])
    settodo("")
  }
  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={SubmitHandler}>
        <input type="text" placeholder='Enter your task' value={todo} onChange={e=>settodo(e.target.value)}/>
        <button>Submit</button>
      </form>

      <ul>
        {data.map((e,i)=>(
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default App