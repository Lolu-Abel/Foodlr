import React from 'react'
import { Accordion } from 'react-bootstrap'
import {Container,Row,Col,Button,Form,InputGroup,Navbar,Nav,NavDropdown,Offcanvas} from 'react-bootstrap'
import img from "./Images/Navbar/logo.png"

export default function Waitlist() {
  return (
<>


<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col sm={6}>
            
          </Col>
          <Col sm={6}>

          </Col>
        </Row>
      </Container>
</>
  )
}
