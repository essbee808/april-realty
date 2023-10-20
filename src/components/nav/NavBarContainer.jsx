import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import House from '../../assets/house.jpg'
import Image from 'react-bootstrap/Image'
import './navBarContainer.css'

function NavBarContainer() {
  return (
    <div className="container-nav">
      <Navbar> 
          <Navbar.Brand href="/">A | R</Navbar.Brand >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link> */}
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
      </Navbar> 
    </div>
  );
}

export default NavBarContainer;