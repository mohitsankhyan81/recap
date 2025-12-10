import React, { useState } from 'react'

const App = () => {

  const [data,setdata]= useState([]);
  const [todo,settodo]=useState('');
  const [editindex,seteditindex]=useState(null)

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(todo.trim()==="")return

    if(editindex==null){
      setdata([...data,todo])
    }
    else{
      data[editindex]=todo
      setdata([...data])
      seteditindex(null)
    }
    settodo("")
  }

  const EditTodo=(i)=>{
    settodo(data[i])
    seteditindex(i)
  }
  const DeleteTodo=(e)=>{
    setdata(data.filter((_,i)=>i!==e))
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your task' value={todo} onChange={e=>settodo(e.target.value)}/>

        <button>submit</button>
      </form>

      <ul>
        {data.map((e,i)=>(
          <li key={i}>
            {e}
            <button onClick={()=>EditTodo(i)}>Edit</button>
            <button onClick={()=>DeleteTodo(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App