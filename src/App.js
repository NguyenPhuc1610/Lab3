// import './App.css';
// import Container from "react-bootstrap/Container";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  Container,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Carousel
} from "react-bootstrap";

import img1 from './Images/menu1.jpg';
import img2 from './Images/menu2.jpg';
import img3 from './Images/menu3.jpg';

function App() {
  return (
    <>
      <Container>
        {/* NAVBAR */}
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    F
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        {/*END NAVBAR */}

        <Row>
          <Carousel slide={false}>
            <Carousel.Item>
              <img text="First slide" src={img1} alt="ảnh 1" style={{objectFit: 'cover', width: '1296px', height: '300px'}}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img text="First slide" src={img2} alt="ảnh 1" style={{objectFit: 'cover', width: '1296px', height: '300px'}}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img text="First slide" src={img3} alt="ảnh 1" style={{objectFit: 'cover', width: '1296px', height: '300px'}}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>


      </Container>
    </>
  );
}

export default App;
