import React from 'react'
import { useFormik } from 'formik'
import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const form_validation = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = "Required Field"
  }

  if (!values.password) {
    errors.password = "Required Field"
  }
  console.log("Errors: ", errors);
  return errors;
}

export default function LoginPage() {
  const Navigate = useNavigate();
  const SignUp = () => {
    Navigate('/registration');
  }
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validate: form_validation,
    onSubmit: (values) => {
      console.log("Received value: ", values);
      let userdata = {
        email: values.email,
        password: values.password
      }
      axios.post("https://node-project-storage.herokuapp.com/postLoginData", userdata)
        .then((res) => {
          console.log("Data Submitted: ", res);

          window.sessionStorage.setItem("TokenValue:", res.data.token);

          alert("Data Submitted Succesfully");
          Navigate("/differentmenu")
        })
        .catch((err) => {
          console.log("Error to Submit data: ", err);
          alert("Data Not Submitted");
        })
    },
  });
  return (
    <div className='background'>
      <div className='login-image'>
      </div>
      <div className='login-form'>
        <Container>
          <h1>Login</h1>
          <br></br>
          <form onSubmit={formik.handleSubmit}>

            <Form.Label className='email'><h5>E-mail</h5></Form.Label>
            <input type='email' onChange={formik.handleChange} value={formik.values.email} id='email' name='email'
              placeholder='Enter Your E-mail Id' onBlur={formik.handleBlur}></input>
            {formik.touched.email && formik.errors.email ? <p style={{ color: "aqua" }}>{formik.errors.email}</p> : null}
            <br></br>
            <Form.Label className='password'><h5>Password</h5></Form.Label>
            <input type='password' onChange={formik.handleChange} value={formik.values.password} id='password' name='password'
              placeholder='Enter Your Password' onBlur={formik.handleBlur}></input>
            {formik.touched.password && formik.errors.password ? <p style={{ color: "aqua" }}>{formik.errors.password}</p> : null}
            <br></br><br></br>


            <input type="Submit" value="Login" disabled={!(formik.dirty && formik.isValid)}></input>
            <p><b> For New User --- </b><Button onClick={SignUp}> SignUp</Button></p>
          </form>
        </Container>
      </div>
    </div>
  )
}