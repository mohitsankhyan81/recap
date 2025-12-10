import React, { useState } from 'react'

const App = () => {
  const[count,setcount]=useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
      <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default App