import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import picture from "./Images/About/jollofedit.jpg"
import Wilson from "./Images/About/Spaghetti.jpg"
import Tiwalolu from "./Images/About/Chicken.jpg"
import Williams from "./Images/About/Chips.jpg"
import Daniel from "./Images/About/Shawarma.jpg"
import Peter from "./Images/About/Cake.jpg"
import Topnav from "./Navbar"
import Footer from "./Footer"
import "./About.css"

export const About = () => {
  return (
    <>
<header>
<Topnav/>
</header>
    <main>
      <Container fluid>
      <Row className='mx-3' id='aboutrow'>
        <Col sm={6} className="justify-content-center" id="first">
          <img src={picture} alt="hsh" id='aboutpic'/>
        </Col>
        <Col sm={6} id="second">
          <div>
            <p id='Miss'>Our Mission</p>
            <p id="Misstext">
              Foodlr app aims to connect foodies with the best restaurants and eateries, making it easy for them to find and enjoy delicious food. With our app, users can easily search for nearby restaurants, browse menus, view ratings and reviews, and make reservations or order food for delivery.
            </p>
            <p id="Misstext">
              We believe that food is more than just sustenance, it's an experience. That's why our app is designed to help people discover new and exciting food kitchen that they may not have known existed in the community.
            </p>  
            
              <p className="pt-4 text-center">
                {/*<li id="testh">Tasty meals, Fresh daily.</li>
                <li id="testh"> All your favourite stores in one place.</li>
              
            <Button variant="light" className='px-3 py-2 mt-2' id="aboutbut">See all our stores!</Button>*/}
              </p>
          </div>
        </Col>
      </Row>
      </Container>


      <Container>
      <Row>
          <h3 className='text-center pb-5' id="Miss">Meet the team</h3>
      </Row>
      <Row>
        <Col sm={4} className='text-center'>
          <img src={Wilson} alt="hsh" id='wilsonpic'/>
          <p id='bold'>Wilson</p>
        </Col>
        <Col sm={4} className='text-center'>
          <img src={Tiwalolu} alt="hsh" id='wilsonpic'/>
          <p id='bold'>Tiwalolu</p>
        </Col>
        <Col sm={4} className='text-center'>
          <img src={Williams} alt="hsh" id='wilsonpic'/>
          <p id='bold'>Williams</p>
        </Col>
      </Row>
      <Row>
      <Col sm={6} className='text-center'>
          <img src={Daniel} alt="hsh" id='wilsonpic'/>
          <p id='bold'>Daniel</p>
        </Col>
        <Col sm={6} className='text-center'>
          <img src={Peter} alt="hsh" id='wilsonpic'/>
          <p id='bold'>Peter</p>
        </Col>
      </Row>
      </Container>
    </main>
    <Footer/>
    </>
  )
}
