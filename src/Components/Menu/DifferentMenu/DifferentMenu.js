import React from 'react'
import {useParams} from 'react-router-dom';
import { Card, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuJSON from '../Menu.json';
import './DifferentMenu.css';

export default function DifferentMenu() {
  let data= useParams();
  console.log("UseParams in Different_Menu: ",data);

  return (
    <div className='differentmenu'>
      <h1> Menu</h1>
      <Row xl={3} lg={3} md={2} sm={1} xs={1}>
      {
        MenuJSON.Different_Menu.map(itemObj=>(
          <React.Fragment key={itemObj.Menu_id}>
            <Col>
            <Card className="text-center" border="warning" style={{ width: '18rem' }}>
              <Card.Header><h4>{itemObj.Menu_name}</h4></Card.Header>
              <Card.Body>
                <Link to={`/submenu/${itemObj.Menu_name}`}>
                  <Button>View Details</Button></Link>
              </Card.Body>
            </Card>
            <br></br><br></br>
            </Col>
          </React.Fragment>
        ))}
        </Row>
      </div>
  )
}
