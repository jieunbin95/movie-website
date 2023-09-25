import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate=useNavigate()
  return (
    <Nav bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="main-img" onClick={()=>navigate('/')}><img        
        width={200}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">Home</Link>
            <Link to='/movies' className="nav-item">Movies</Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Nav>
  );
};

export default Navigation;
