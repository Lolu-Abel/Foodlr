import React from 'react'
import Topnav from "./Navbar"
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import "./Contact.css"
import { FaPhoneAlt, FaLandmark, FaEnvelope, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Footer from './Footer'


export const Contact = () => {
  return (
    <>
    <header>
      <Topnav/>
    </header>
<Container fluid id="background">
  <Container id="innerbackground">
    <Row className='px-5 py-5'>
      <Col sm={4}>
        <h2>REACH OUT TO US</h2>
        <p>Send us a message, call us directly or reach out to us on any of our socials.</p>
        <div className='mt-5'>
          <p id='top' className='py-2'>
            <div className='me-3' id='bottom'>
              <FaPhoneAlt/>
            </div>
            +234 811 343 7159
          </p>
          <p id='top' className='py-2'>
            <div className='me-3' id='bottom'>
              <FaEnvelope/>
            </div>
            Info@foodlr.co
          </p>
          <p id='top' className='py-2'>
            <div className='me-3' id='bottom'>
              <FaLandmark/>
            </div>
              2, Mogbonjubola hostel, Ile-Ife, Osun state, Nigeria.
          </p>
        </div>
        <p>
          <a href='https://twitter.com/foodlr_app?s=21&t=iNR9z_jv0QBG-PTvypLDYQ' id="contactlinkicon" className='text-center justify-content-center align-items-center'><FaTwitter/></a>
          <a href='https://wa.me/+2348113437159' id="contactlinkicon" className='text-center justify-content-center align-items-center'><FaWhatsapp/></a>
          <a href='https://instagram.com/foodlrapp?igshid=YmMyMTA2M2Y=' id="contactlinkicon" className='text-center justify-content-center align-items-center'><FaInstagram/></a>
        </p>
      </Col>
      <Col sm={2}></Col>
      <Col sm={6} id="formbg">
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mail</Form.Label>
        <Form.Control type="email" placeholder="Your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <a href="mailto:Info@foodlr.co">
      <Button variant="warning" id="contactcolor">Send Message</Button>
      </a>
    </Form>
      </Col>
    </Row>
  </Container>
</Container>

  <Footer/>
    </>
  )
}

