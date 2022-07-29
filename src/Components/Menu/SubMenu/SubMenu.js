import React from 'react'
import {useParams} from 'react-router-dom';
import MenuJSON from '../Menu.json';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row} from 'react-bootstrap';
import './SubMenu.css';


export default function SubMenu() {
    let data=useParams();
    console.log("Use Params in Different_Menu: ",data);

    let menu = MenuJSON.Different_Menu.find((value)=>value.Menu_name===data.menuname)
    console.log("SubMenu:",menu);
    
  return (
    <div className='submenu'>
      <h1>Menu-Details</h1>
      <Row xl={3} lg={3} md={2} sm={1} xs={1}>
        {
        menu.Sub_Menu.map((menusub)=>(
            <Col>
            <Card className="text-center" border="warning" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                <Card.Header><h4>{menusub.Sub_Menu_name}</h4></Card.Header>
                  </Card.Title>
                  {/* <Card.Img variant="top" src={menusub.Sub_Menu_image}/> */}
                  <Link to={`/detailsmenu/${menu.Menu_name}/${menusub.Sub_Menu_name}`}>
                  <Button>View Details</Button></Link>
              </Card.Body>
              
            </Card>
            <br></br><br></br>
            </Col>
        ))}
        </Row>
      </div>
  )
}