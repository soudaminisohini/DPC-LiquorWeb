import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RootRoute from './Components/RootRoute/RootRoute';

function App() {

  const [showPop, setShow] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    },100);
  }, []);

  return (
    <div className="App">
      <Modal show ={showPop}>
        <Modal.Header closeButton onClick= {() => setShow(false)}>
          <Modal.Title>Welcome to DaaruPeCharcha.com </Modal.Title>
          </Modal.Header>
        <Modal.Body>By Clicking Enter You Verify that You are 21 Years of Age or Older</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=> setShow(false)}>Enter</Button>

      </Modal.Footer>
      </Modal>
      
      <RootRoute/>
    </div>
  );
}

export default App;
