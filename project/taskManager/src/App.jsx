import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function App(){
  const [data,setdata]=useState([]);
  const [todo,settodo]=useState('');
  useEffect(()=>{axios.get('http://localhost:4543/todos').then(r=>setdata(r.data))},[]);
  const handleSubmit=e=>{e.preventDefault();if(todo.trim()==='')return;
    axios.post('http://localhost:4543/todos',{text:todo}).then(r=>setdata(prev=>[...prev,r.data]));
    settodo('');
  }
  const handledelete=id=>{axios.delete(`http://localhost:4543/todos/${id}`).then(()=>setdata(prev=>prev.filter(i=>i._id!==id)))}
  return (
    <div style={{padding:20}}>
      <h1>Tasks here</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={e=>settodo(e.target.value)} placeholder="Enter your data"/>
        <button>Submit</button>
      </form>
      <ul>
        {data.map(e=>(
          <li key={e._id}>
            {e.text} <button onClick={()=>handledelete(e._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
