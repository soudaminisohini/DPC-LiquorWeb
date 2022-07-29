import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
// import AboutPage from '../AboutPage/AboutPage'
import HomePage from '../HomePage/HomePage'
import Header from '../Layout/Header'
import PageNotFound from '../PageNotFound/PageNotFound'
// import ContactPage from '../ContactPage/ContactPage'
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import ProtecedRoutes from './ProtectedRoutes'
import SubMenu from '../Menu/SubMenu/SubMenu';
import DifferentMenu from '../Menu/DifferentMenu/DifferentMenu';
import DetailsMenu from '../Menu/DetailsMenu/DetailsMenu';
import FooterPage from '../FooterPage/FooterPage';

//setTimeout(()=>{},1000)
const AboutPage=React.lazy(()=>{
  return new Promise(resolve =>{
    setTimeout(()=>resolve(import('../AboutPage/AboutPage')),2000)
  })
  });
  const ContactPage=React.lazy(()=>{
    return new Promise(resolve =>{
      setTimeout(()=>resolve(import('../ContactPage/ContactPage')),2000)
    })
    });

export default function RootRoute() {
  return (
    <div>
      <Router>
      <Header/>
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        
      <Routes>
      <Route path="" element={<HomePage/>}/>
      {/* Default PathSetup */}
      <Route path="*" element={<PageNotFound/>}/>
      {/* Wild Card Path Setup */}

      <Route path="about" element={<AboutPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="registration" element={<RegistrationPage/>}/>
      <Route path="submenu/:menuname" element={<SubMenu/>}/>
      <Route path="detailsmenu/:menu_name/:category" element={<DetailsMenu/>}/>

      <Route element={<ProtecedRoutes/>}>
      <Route path="differentmenu" element={<DifferentMenu/>}/>
      </Route>
        </Routes>
        </Suspense>
        <FooterPage></FooterPage>
        </Router>
    </div>
  )
}
