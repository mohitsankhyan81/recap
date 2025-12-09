import React from 'react'

const User = ({name}) => {
  return (
    <div>
      <h3>Name: {name.name}</h3>
      <h3>Age: {name.age}</h3>
      <h3>Email: {name.email}</h3>
    </div>
  )
}

export default User