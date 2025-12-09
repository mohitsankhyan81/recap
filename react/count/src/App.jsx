import React, { useState } from 'react'

const App = () => {

  const [count,setcount] =useState(0);
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default App