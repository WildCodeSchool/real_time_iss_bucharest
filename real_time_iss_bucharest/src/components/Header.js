import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from "react-scroll";
import Navbar_Logo from './Navbar_Logo/Navbar_Logo'




const Header = (props) => {
  return (<div>
    <Navbar bg="dark" variant="dark" className='headerContainer'>
      <Navbar_Logo/>
      {/* <img src={props.image} alt="logo" /> */}
      <Nav className="mr-auto" className='navbarHeader'>
        <Nav.Link href="#">

          <Link
            activeClass="inactive"
            to="welcome"
            spy={true} smooth={true}
            offset={0} duration={500}
          >Home</Link>
        </Nav.Link>
        <Nav.Link href="#"><Link
          activeClass="inactive"
          to="mapSection"
          spy={true} smooth={true}
          offset={0} duration={500}
        >Map</Link></Nav.Link>
        <Nav.Link href="#">

          <Link
            activeClass="inactive"
            to="newsSection"
            spy={true} smooth={true}
            offset={0} duration={500}
          >About ISS</Link></Nav.Link>
        <Nav.Link href="#">

          <Link
            activeClass="inactive"
            to="Carousel"
            spy={true} smooth={true}
            offset={-200} duration={500}
          >Carousel</Link></Nav.Link>
        <Nav.Link href="#">

          <Link
            activeClass="inactive"
            to="newsletter"
            spy={true} smooth={true}
            offset={0} duration={500}
          >Contact</Link></Nav.Link>
      </Nav>
    </Navbar>
  </div>
  );
}

export default Header;
