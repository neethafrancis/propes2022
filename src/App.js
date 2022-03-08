import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import backgroundImage from './backgd.jpg';
function App() {
  return (
   <div style={{ backgroundImage: `url(${backgroundImage})`,height:"100vh",backgroundSize: 'cover',width: '100vw',backgroundPosition: 'center' }}>
      <Navbar bg="none" variant="dark">
    <Container >
      <Navbar.Brand href="#home" >
        <img
          alt=""
          src={ logo }
          width="150"
          height="150"
        />{' '}
       </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Speakers">Speakers</Nav.Link>
      <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  {/* <div>
  
  </div> */}
    </div>
  );
}

export default App;
