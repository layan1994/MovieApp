import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import './Register.css';
import Banner from './Banner';

function Register() {

    const initialValue= {firstName:"", lastName:"", email:"", password:"", confirmPassword:"" };
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormValues({ ...formValues, [name]:value});
        console.log(formValues); 
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.firstName){
            errors.firstName = "required field";
        }
        if (!values.lastName){
            errors.lastName = "required field";
        }
        if (!values.email){
            errors.email = "required";
        }else if(!regex.test(values.email)){
            errors.email = ""
        }
        if (!values.password){
            errors.password = "user name required";
        }else if (values.password < 10){
            errors.password = "more than 10 characters"
        }
        if (!values.confirmPassword){
            errors.confirmPassword = "user name required";
        }
    } ;


  return (
      <div  className='header'>
      <Banner/>
    <Form onSubmit={handleSubmit}  className='sign__container'>
        <h1 className='h1__head'>Sign Up</h1>
      <Form.Group className="mb-3" controlId="fisrtName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
      type="text" 
      name='firstName'
      placeholder="Enter Name" 
      onChange={handleChange}/>
     </Form.Group>
     <p>{formErrors.firstName}</p>
     <Form.Group className="mb-3" controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
      type="text"
      name='lastName'
      placeholder="Enter Name" 
      onChange={handleChange} />
     </Form.Group>  
     <p>{formErrors.lastName} </p>     
     <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      type="email" 
      name='email'
      placeholder="Enter email" 
      onChange={handleChange} />
     </Form.Group>
     <p>{formErrors.email}</p>
     <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      name='password'
      placeholder="Password" 
      onChange={handleChange} />
     </Form.Group>
     <p>{formErrors.password}</p>
     <Form.Group className="mb-3" controlId="confirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control 
      type="Password" 
      name='confirmPassword'
      placeholder="Re-Enter Password" 
      onChange={handleChange} />
     </Form.Group>
     <p>{formErrors.confirmPassword}</p>
     <Button  
     className='btn__login' 
     variant="btn mt-3" 
     type="submit"
     >
      Submit
     </Button>
  </Form>
  </div> 
    )
}
export default Register;