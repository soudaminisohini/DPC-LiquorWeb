import React from 'react'
import MenuJSON from '../Menu.json';
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './DetailsMenu.css';

export default function DetailsMenu() {
  let data = useParams();
  console.log("UseParams in Details: ", data);

  let menu = MenuJSON.Different_Menu.find((val) => val.Menu_name === data.menu_name)
  console.log("Details:", menu);

  let menuobj = menu.Sub_Menu.find((value) => value.Sub_Menu_name === data.category)
  console.log("Sub Details:", menuobj);

  return (
    <div className='detailsmenu'>
      <h1>Details</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Header>{menuobj.Sub_Menu_name}</Card.Header>
        <Card.Img variant="top" src={menuobj.Sub_Menu_image} height={"350px"} width={"200px"}></Card.Img>
        <Card.Text>{menuobj.Sub_Menu_description}</Card.Text>
      </Card>
    </div>
  )
}
