import React from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {AiFillHome} from 'react-icons/ai'
import{TbFileDescription} from 'react-icons/tb'
import{GiBeerBottle} from 'react-icons/gi'
import{SiGnuprivacyguard} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'
import {IoMdLogOut} from 'react-icons/io'

import './Header.css'

export default function Header() {
  const navigate=useNavigate();

  const loggingout=()=>{
    window.sessionStorage.clear();
    alert ("You have Successfully Logged Out Your Account.")
    navigate('');
  }
  return (
    <div>
    <div>
    <Navbar className='nav-bar'>
        <Container>
          <Navbar.Brand href="/" className='Logo'>
          </Navbar.Brand>
          <Navbar className='nav-bar1'>
            <Nav.Link as={Link} to="/" className= "home">Home<AiFillHome/></Nav.Link>
            <Nav.Link as={Link} to="differentmenu" className='menu'>MENU<GiBeerBottle/></Nav.Link>
            <Nav.Link as={Link} to="about" className="about">About-Us<TbFileDescription/></Nav.Link>
            <Nav.Link as={Link} to="login" className="login">Log-In<SiGnuprivacyguard/></Nav.Link>
            <Nav.Link as={Link} to="contact" className="contact">Contact-Us<IoMdContact/></Nav.Link>
            <NavDropdown title={<span className='link'></span>} id="basic-nav-dropdown" >
              <NavDropdown.Item onClick={loggingout} className="logout">Logout<IoMdLogOut/></NavDropdown.Item>
              
            </NavDropdown>
            

          </Navbar>
        </Container>
      </Navbar>
    </div>
    </div>
  )
}