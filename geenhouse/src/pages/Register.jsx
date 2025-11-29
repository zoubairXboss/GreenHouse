import React from 'react'

function Register() {
    
    const id = localStorage.getItem('idUser')

  return (
    <div>
        {id?"salam ":'walo'}
        {id}
    </div>
  )
}

export default Register