import { React, Component } from "react"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import img from "./Images/Navbar/logo.png";
import "./NavbarStyles.css"

class Navbar extends Component{
    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
    <>
        <nav>
            <a href="/">
                <img src={img} alt="th" id="logo"/>
            </a>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://google.com"><Button variant="light" className='mt-2' id="Navbarbutton">Get App!</Button></a></li>
                </ul>
            </div>
            <div id="mobilenavbar" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>

                </i>
            </div>
        </nav>
    </>
    )
}
}
export default Navbar;