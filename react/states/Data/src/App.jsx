import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data,setdata]=useState('');
  return (
    <div>
      <h1>User data</h1>
      <input type="text" placeholder='enter your name' onChange={(e)=>setdata(e.target.value)}/>

      <h3>User Name is: {data}</h3>
    </div>
  )
}

export default App