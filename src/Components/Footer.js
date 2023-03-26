import { React, Component} from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {Container,Row,Col} from 'react-bootstrap';
import {FaTwitter, FaWhatsapp, FaInstagram} from "react-icons/fa";
import image from "./Images/Footer/foodlrfooter.png"

class Footer extends Component{
    render(){
        return(
        <>
<Container fluid className='bg-black text-white mb-0 pt-5' id="desktopfooter">
<Container>
<Row>
  <Col sm={3} className="pt-2" id="social">
    <img src={image} alt="th" id="logosm"/>
    <p>All your favourite restaurants in one place!</p>
    <p id="inline">
        <a href='https://twitter.com/foodlr_app?s=21&t=iNR9z_jv0QBG-PTvypLDYQ' id='che' className='text-center justify-content-center align-items-center'>
          <FaTwitter/>
        </a>
        <a href='https://wa.me/+2348113437159' id='che' className='text-center justify-content-center align-items-center'>
          <FaWhatsapp/>
        </a>
        <a href='https://www.instagram.com/foodlrapp/' id='che' className='text-center justify-content-center align-items-center'>
          <FaInstagram/>
        </a>
    </p>
  </Col>
  <Col sm={3}></Col>
  <Col sm={2}>
    <h4>Company</h4><br></br>
    <a href='https://google.com' id='footerlinks'><p>Get app</p></a>
    <a href='https://google.com' id='footerlinks'><p>Partner with us</p></a>
    <Link to="/waitlist" id='footerlinks'> <p>FAQ&apos;s</p></Link>
    <a href='https://google.com' id='footerlinks'><p>About us</p></a>
  </Col>
  <Col sm={2}>
  <h4>Support</h4><br></br>
    <a href='https://google.com' id='footerlinks'><p>Get help</p></a>
    <a href='https://google.com' id='footerlinks'><p>Contact us</p></a>
    <a href='https://google.com' id='footerlinks'><p>Feedback</p></a>
  </Col>
  <Col sm={2}>
  <h4>Legal</h4><br></br>
    <a href='https://google.com' id='footerlinks'><p>Terms and conditions</p></a>
    <a href='https://google.com' id='footerlinks'><p>Privacy policy</p></a>
    <a href='https://google.com' id='footerlinks'><p>Disclaimer</p></a>
  </Col>
</Row>
<Row><hr></hr></Row>
<Row>
  <p><span>&copy;</span> 2023 Foodlr. All rights Reserved </p>
</Row>
</Container>
</Container>
{/*End ofSection F*/}

{/* Mobile footer */}
<Container fluid className='bg-black text-white pt-4' id="mobilefooter">
<Container>
<Row>
<Col sm={6} className="text-center" id="fifty">
  <a href='https://google.com'><p>Get App</p></a>
</Col>
<Col sm={6} className="text-center" id="fifty">
  <a href='https://google.com'><p>FAQ's</p></a>
</Col>
</Row>
<Row>
<Col sm={6} className="text-center" id="fifty">
  <a href='https://google.com'><p>Privacy policy</p></a>
</Col>
<Col sm={6} className="text-center" id="fifty">
  <a href='https://google.com'><p>Feedback</p></a>
</Col>
</Row>
<Row><hr></hr></Row>
<Row className='text-center'>
  <p><span>&copy;</span> 2023 Foodlr. All rights Reserved </p>
  <p>
  <a href='https://twitter.com/foodlr_app?s=21&t=iNR9z_jv0QBG-PTvypLDYQ' id="mobilefootericon"><FaTwitter/></a>
  <a href='https://wa.me/+2348113437159' id="mobilefootericon"><FaWhatsapp/></a>
  <a href='https://www.instagram.com/foodlrapp/' id="mobilefootericon"><FaInstagram/></a>
</p>
</Row>
</Container>
</Container>

</>
    )
}
}
export default Footer;