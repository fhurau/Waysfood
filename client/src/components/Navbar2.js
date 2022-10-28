import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "../components/Icon.png"
import "./Style.css"
import keranjang from "../components/Dummy/keranjang.png"
import profilekecil from "../components/Dummy/profilekecil.png"
import user from "../components/Dummy/user.png"
import vector from "../components/Dummy/Vector.png"
import logout from "../components/Dummy/logout.png"
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar2() {

  return (
    <div>
    <Navbar expand="lg" className='colornav'>
      <Container>
        <Navbar.Brand href="#home"><img src={Icon} alt="Wayfood" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <div className='iconkanan gap-4'>
            <img src={keranjang} alt="" className='keranjang'/>
            </div>
            
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" >
                <img style={{width:'30px'}}  src={profilekecil} alt="profile"  className=''/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1"> <img width={25} src={user} alt="" /> Profile Partner</Dropdown.Item>
                <Dropdown.Item eventKey="2"><img width={25} src={vector} alt="" /> Add Product</Dropdown.Item>
              <Dropdown.Divider />
                <Dropdown.Item eventKey="3"><img width={25} src={logout} alt=""/><Link to="/"  className='text-decoration-none fw-bold text-dark'>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}


export default Navbar2;
