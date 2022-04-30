import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import './Login.css'
import Banner from './Banner';




function Login() {

  return (
    <div>
      <Banner/>
 
    <Form className='login__container'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button className='btn__login' variant="btn mt-3"  type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default Login