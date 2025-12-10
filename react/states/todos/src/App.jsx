import React, { useState } from 'react'

const App = () => {
  const[data,setdata]= useState([]);
  const [todo,settodo]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(todo.trim()==="") return
    setdata([...data,todo])
    settodo("")
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the task' value={todo} onChange={e=>settodo(e.target.value)}/>
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