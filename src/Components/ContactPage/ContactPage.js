import React from 'react'
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import './ContactPage.css';

export default function ContactPage() {
  
  const form_validation = (values) => {
    let errors = {}

    if (!values.username) {
        errors.username = 'Required Field'
    } else if (values.username.length < 4) {
        errors.username = 'Must be 5 Characters or More'
    }

    if (!values.email) {
        errors.email = 'Required Field'
    } 

    if (!values.message) {
        errors.message = 'Required Field'
    } else if (values.message.length < 20) {
      errors.message = 'Must be 21 Characters or More'
    } 
    console.log ("Errors: ",errors);
    return errors;
}

const formik = useFormik({
  initialValues: {
      username: '',
      email: '',
      message:'',
  }, validate: form_validation,
  onSubmit: (values) => {
      console.log("Received Data:", values);
      alert("Data Submitted Succesfully.Thank You So Much.Visit Again!");

  }
})

   return (
    <div className='body'>
    <div className='leftbox'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471218.38559717475!2d88.04952484283037!3d22.676385756918386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1658568536252!5m2!1sen!2sin" style={{border:"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className='middlebox'> 
  <Container>
   <h1>Get in Touch</h1>
   <form onSubmit={formik.handleSubmit}>

<Form.Label className='username'><h5>Username</h5></Form.Label>
<input type='text' onChange={formik.handleChange} value={formik.values.username} id='username' name='username'
placeholder='Enter Your Username' onBlur={formik.handleBlur}></input>
{formik.touched.username && formik.errors.username ? <p style={{color:"aqua"}}>{formik.errors.username}</p> : null}
<br></br>
<Form.Label className='email'><h5>E-mail</h5></Form.Label>
<input type='email' onChange={formik.handleChange} value={formik.values.email} id='email' name='email'
placeholder='Enter Your E-mail Id' onBlur={formik.handleBlur}></input>
{formik.touched.email && formik.errors.email ? <p style={{color:"aqua"}}>{formik.errors.email}</p> : null}
<br></br>
<Form.Label className='message'><h5>Message</h5></Form.Label>
<input type='text' onChange={formik.handleChange} value={formik.values.message} id='message' name='message'
placeholder='Write Something...' onBlur={formik.handleBlur}></input>
{formik.touched.message && formik.errors.message ? <p style={{color:"aqua"}}>{formik.errors.message}</p> : null}
<br></br><br></br>

<input type='submit' value="Send Feedback" disabled={!(formik.dirty && formik.isValid)}></input>
</form>
</Container>
   </div>

    <div className='rightbox'>
    </div>
    </div>
  )
}