import React from 'react'
import {Container,Row,Col,Button,Accordion} from 'react-bootstrap'
import { FaAppStoreIos, FaGooglePlay, FaRegClock, FaRegMoneyBillAlt, FaHamburger } from "react-icons/fa"
import { HiOutlinePencilSquare, HiArrowUturnRight } from "react-icons/hi2";
import { MdRiceBowl } from "react-icons/md";
import iphone from "./Images/Home/Download.png"
import card from "./Images/Home/card.png"
import card2 from "./Images/Home/card2.png"
import card3 from "./Images/Home/card3.png"
import picture from "./Images/Home/jollofedit.jpg"
import Topnav from "./Navbar"
import Footer from "./Footer"
import "./Home.css"


export const Home = () => {
  return (
    <>
    <header>
      <Topnav/>
    </header>
    <main>

      {/*Section A*/}
      <Container fluid className="my-2 px-3 pb-3">
      <Row className='px-4 mt-3'>
        <Col sm={6} className='d-flex justify-content-center'>
          <div>
            <p id='delivered'>Have your Favourite Dishes Delivered to your <span id='color'>Doorstep.</span></p><br id='mobilenone'/>
            <p id="desktop">
                Your next meal is only a tap away with Foodlr. You can choose from a variety of cuisines and diets or use the app to find restaurants and cafés close to where you are. We have everything you need to satisfy your palate, from vegan options to the newest culinary trends.
            </p><br></br>
            <Button variant="dark" className='p-2 mx-2' id="desktop"><span><FaGooglePlay id="icons"/></span> Get it on playstore!</Button>
            <Button variant="light" className='p-2 mx-2 text-white' id="desktopbutton"><span><FaAppStoreIos id="icons"/></span> Get it on App store!</Button>
          </div>
        </Col>
        <Col sm={6}>
        <img src={picture} alt="food" id="foodpic"/>
        <p className=' pt-4 pb-2' id="mobile">Your next meal is only a tap away with Foodlr. You can choose from a variety of cuisines and diets or use the app to find restaurants and cafés close to where you are. We have everything you need to satisfy your palate, from vegan options to the newest culinary trends.</p>
        <p className='text-center'>
          <Button variant="dark" className='p-2 mx-2' id="buttonmobile"><span><FaGooglePlay id="icons"/></span> Get it on playstore!</Button>
          <Button variant="dark" className='p-2 mx-2' id="buttonmobile"><span><FaAppStoreIos id="icons"/></span> Get it on App store!</Button>   
        </p>
        </Col>
      </Row>
      </Container>
      {/*End of Section A*/}
<br/>
<br/>

      {/*Section B*/}
      <Container className="mt-5 pt-2">
        <Row className='pt-5'>
          <h5 className='text-center' id='color'>Our Service</h5>
        </Row>
        <Row>
          <h4 className='text-center pb-5'>How Does It work?</h4>
        </Row>
        <Row id="flex">
          <Col sm={3} id="polaroid1">
            <img src={card} alt="th"/><br></br><br></br>
            <div class="container">
            <h4  className='py-3a'>Order Online</h4><br></br>
            <p>Get your favourite meals delivered to your doorstep.</p>
            </div>
          </Col>
          <Col sm={3} id="polaroid">
            <img src={card2} alt="th"/><br></br><br></br>
            <div class="container">
            <h4>Fast Delivery</h4><br></br>
            <p>Timely delivery to preserve all the yum and freshness.</p>
            </div>
          </Col>
          <Col sm={3} className="" id="polaroid">
            <img src={card3} alt="th"/><br></br><br></br>
            <div class="container">
            <h4>Best Quality</h4><br></br>
            <p>Healthy meals to give you all the nourishment you need.</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/*End of Section B*/}


      {/*Section C*/}
  <Container fluid className='bg-dark text-white mt-5 py-5'>
    <Container className='mx-auto'>
        <Row>
            <h2 className='text-center' id="underline">Why Choose Us?</h2>
        </Row>
        <Row className="mt-5 mb-4">
          <Col sm={4}>
            <p id='inline'>
              <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                <FaRegClock/>
              </div> 
              We Deliver on Time
            </p>
          </Col>
          <Col sm={4}>
            <p id='inline'>
              <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                <FaRegMoneyBillAlt/>
              </div>
            Pocket Friendly Meals
            </p>
          </Col>
          <Col sm={4}>
            <p id='inline'>
                <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                  <MdRiceBowl/>
                </div>
                Local Cuisines
            </p>
          </Col>
          <Col sm={4}>
            <p id='inline'>
                <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                  <HiOutlinePencilSquare/>
                </div>
                Seamless Ordering
            </p>
          </Col>
          <Col sm={4}>
            <p id='inline'>
                <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                  <FaHamburger/>
                </div>
                Delicious Delicacies
            </p>
          </Col>
          <Col sm={4}>
            <p id='inline'>
                <div id='che' className='text-center justify-content-center align-items-center mb-3'>
                  <HiArrowUturnRight/>
                </div>
                Straightforward Order
            </p>
          </Col>
        </Row>
    </Container>
  </Container>
    {/*End of Section C*/}


    {/*Section D*/}
  <Container className="px-3 mt-5 text-white pt-3" id="download">
    <Row>
      <Col sm={6} className="pt-5" id="downloadone">
        <h2 className='pb-3' id="downloadcenter">Download Our Mobile App </h2>
        <p className='mx-3 pb-3'> 
          To ensure that you know precisely what you're ordering before you arrive, our app also includes comprehensive menus, ratings and reviews, and even food images. So, why wait? Download Foodlr today!
        </p>
        <p id="downloadcenter">
          <Button variant="dark" className='p-2 mx-2 mb-3' id="downloadbutton"><span><FaGooglePlay id="icons"/></span> Get it on playstore!</Button>
          <Button variant="light" className='p-2 mx-2 mb-3' id="downloadbutton"><span><FaAppStoreIos id="icons"/></span> Get it on App store!</Button>
        </p>
      </Col>
      <Col sm={2} id="downloadtwo"></Col>
      <Col sm={4} id="downloadthree">
        <img src={iphone} alt="iphone 13"/>
      </Col>
    </Row>
  </Container>
      {/*End of Section D*/}

      {/*Section E*/}
  <Container className="my-5 pb-5 pt-3" id="newsletter">
      <Row>
        <h5 className='text-center' id='color'>Our Newsletter</h5>
      </Row>
      <Row>
        <h4 className='text-center'>Subscribe To Our Newsletter</h4>
      </Row>
      <Row className="py-2">
        <Col sm={3}></Col>
        <Col sm={6} className='text-center'>Join our newsletter to be the first to get notified about new restaurant openings, discount offers, promos and other exciting news.</Col>
        <Col sm={3}></Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6} className=''>
          <div class="input-group my-3">
            <input id='news' type="text" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
          </div>

        </Col>
        <Col sm={3}></Col>
      </Row>
  </Container>
    {/*End of Section E*/}


    {/*SECTION F */}

    <Container className='mb-5'>
      <Container>
      <Row>
        <h4 className='text-center mb-4' id='color'>FAQ's</h4>
      </Row>
      <Accordion>
      <Accordion.Item eventKey="0" className='mt-2' id="accordion">
        <Accordion.Header>How do I sign up as a store?</Accordion.Header>
        <Accordion.Body>
          Reach out to us through any of our social media handles or you can just send us a mail.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='mt-2' id="accordion">
        <Accordion.Header>Can I order from different restaurants?</Accordion.Header>
        <Accordion.Body>
          Yes, you can order from any restaurant of your choice.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-2' id="accordion">
        <Accordion.Header>How is the food delivered to me?</Accordion.Header>
        <Accordion.Body>
          <p>Once you've placed your order, it's sent directly to the restaurant for them to prepare and package.</p>
          <p>Once it's ready, a rider will pick up your order and bring it to your delivery address.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mt-2' id="accordion">
        <Accordion.Header>As a vendor, can I still sell food on pre-order?</Accordion.Header>
        <Accordion.Body>
          Yes, we provide a pre-order feature for our vendors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mt-2' id="accordion">
        <Accordion.Header>What if I want to cancel my order?</Accordion.Header>
        <Accordion.Body>
          You can cancel your order anytime before the store approves your order.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mt-2' id="accordion">
        <Accordion.Header>Can I place orders in advance?</Accordion.Header>
        <Accordion.Body>
          Yes, you can.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className='mt-2' id="accordion">
        <Accordion.Header>Is joining your vendors program free?</Accordion.Header>
        <Accordion.Body>
          Yes, it's free for the first 4-6 months after which you start paying a 
          little token for rent if you love the service we provide
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className='mt-2' id="accordion">
        <Accordion.Header>I can't see my question here. I need more information</Accordion.Header>
        <Accordion.Body>
          Send a message to us through any of our social media accounts.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  </Container>
    {/*End of Section F */}
<Footer/>
</main>
</>
  )
}
