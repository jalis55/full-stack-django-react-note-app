import React from 'react'
import { Form } from 'react-router-dom'

const Register = () => {
  return (
     <Form route="/api/user/register/" method='register' />
  )
}

export default Register;
