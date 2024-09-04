import React from 'react'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
   <Form route="/api/user/login/" method='login' />
  )
}

export default Login
