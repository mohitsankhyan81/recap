import React, { useState } from 'react'

const App = () => {

  const [data,setdata]=useState([]);
  const [todo,settodo]=useState('');
  const [editindex,seteditindex]=useState(null);

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(todo.trim()==="")return

    if(editindex===null){
      setdata([...data,todo])
    }
    else{
      data[editindex]=todo
      setdata([...data])
      seteditindex(null)
    }
    settodo("")
  }

  const deletetodo=(e)=>{
    setdata(data.filter((_,i)=>i!==e))
  }

  const edittodo=(i)=>{
    settodo(data[i])
    seteditindex(i)
  }
  return (
    <div>
      <h1>Todo Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter task here' value={todo} onChange={e=>settodo(e.target.value)}/>
        <button>Submit</button>
      </form>

      <ul>
        {data.map((e,i)=>(
          <li key={i}>
            {e}
            <button onClick={()=>edittodo(i)}>Edit</button>
            <button onClick={()=>deletetodo(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App