import React from 'react'
import User from './components/User'


const App = () => {
  const data={
    name:"Mohit Sankhyan",
    age:34,
    email:"mohitsankhyan81@gmail.com"
  };

  return (
    <div>
      <h1>This is props</h1>
      <User name={data}/>
    </div>
  )
}

export default App