import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

const Header = (props) => {
  return ( <div>
    <Navbar bg="dark" variant="dark" className='headerContainer'>
        <img src={props.image}/>
        <Nav className="mr-auto" className='navbarHeader'>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Map</Nav.Link>
          <Nav.Link href="#">About ISS</Nav.Link>
          <Nav.Link href="#">Carousel</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
    </Navbar>
  </div>
  );
}

export default Header;
