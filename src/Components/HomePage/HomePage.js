import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='home'>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img className='img-one' src="../../../../Images/wine2.jpg" alt=""/>
            <Carousel.Caption>
              <h3>Celebrate Together</h3>
              <p>*Drink Responsibility</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img className='img-two' src="../../../../Images/Jack2jpg.jpg" alt=""/>
            <Carousel.Caption>
              <h3>Jump the Queue and Get Your Jack Delivered</h3>
              <p>Luxury in a Bottle</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img className='img-three' src="../../../../Images/flow.jpg" alt=""/>
            <Carousel.Caption>
              <h3>Say Cheers With the Collection of Whiskeys, Vodka, Rums and More!</h3>
              <h4>In case of Emergency, Fill with Vodka!!!</h4>
              <p>Enjoy the Evening</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img className='img-four' src="../../../../Images/wine.jpg" alt=""/>
            <Carousel.Caption>
              <h3>Sip On A Collection of Elegant Wines!</h3>
              <p>Premium Option Available</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
