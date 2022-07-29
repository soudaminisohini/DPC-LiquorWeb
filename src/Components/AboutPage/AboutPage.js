import React from 'react'
import './AboutPage.css';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const Navigate = useNavigate();
  const ViewMore = () => {
    alert("Please Login at First");
    Navigate('/differentmenu');
  }
  return (
    <div className='background-about'>
      <div className='image'>
        <div className='logo'>

          <h1>About-Us</h1>
          <h1 className='heading'>Just Relax, & Go With the Flow</h1>
          <button onClick={ViewMore}>View-More</button>
        </div>
      </div>
    </div>
  )
}
