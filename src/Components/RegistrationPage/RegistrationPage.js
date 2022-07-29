import React from 'react'
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

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

        if (!values.password) {
            errors.password = 'Required'
        } 
        console.log ("Errors: ",errors);
        return errors;
    }

    export default function RegistrationPage() {
    const Navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        }, validate: form_validation,
        onSubmit: (values) => {
            console.log("Received Data:", values);
            // alert(JSON.stringify(values, null, 2))
            let userdata = { 
                username: values.username, 
                email: values.email, 
                password: values.password 
            }
            axios.post("https://node-project-storage.herokuapp.com/postUserData", userdata)
                .then((res) => {
                    console.log("Data Submitted: ", res);
                    alert("Data Submitted Succesfully")
                    Navigate('/login');
                })
                .catch((err) => {
                    console.log("Error to Submit data: ", err);
                    alert("Data Not Submitted")
                })
        },
    });
    
    return (
        <div className='background-reg'>
        <div className='reg-image'>
           </div>
           <div className='reg-form'>
             <Container>
             <h1>Sign-Up</h1>
             <br></br>
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
                <Form.Label className='password'><h5>Password</h5></Form.Label>
                <input type='password' onChange={formik.handleChange} value={formik.values.password} id='password' name='password'
                placeholder='Enter Your Password' onBlur={formik.handleBlur}></input>
                {formik.touched.password && formik.errors.password ? <p style={{color:"aqua"}}>{formik.errors.password}</p> : null}
                <br></br><br></br>
                
                <input type='submit' value="Register Data" disabled={!(formik.dirty && formik.isValid)}></input>
            </form>
            </Container>
        </div>
        </div>
    )
}
