
import {
  Container,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Carousel,
  Col,
  Card
} from "react-bootstrap";

import img1 from './Images/menu1.jpg';
import img2 from './Images/menu2.jpg';
import img3 from './Images/menu3.jpg';


import Pizza1 from './Images/pizza1.jpg'
import Pizza2 from './Images/pizza2.jpg'
import Pizza3 from './Images/pizza3.jpg'
import Pizza4 from './Images/pizza4.jpg'

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

        {/*Carousel */}
        <Row>
          <Carousel slide={false}>
            <Carousel.Item>
              <img
                src={img1}
                alt="ảnh 1"
                className="d-block w-100"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img2}
                alt="ảnh 2"
                className="d-block w-100"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img3}
                alt="ảnh 3"
                className="d-block w-100"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/*END Carousel */}

        {/* CARD  */}
        <Row style={{marginTop: '25px'}}>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Pizza1}  style={{objectFit: 'cover', height: '17rem', width: '18rem'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Pizza2}  style={{objectFit: 'cover', height: '17rem', width: '18rem'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Pizza3}  style={{objectFit: 'cover', height: '17rem', width: '18rem'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Pizza4}  style={{objectFit: 'cover', height: '17rem', width: '18rem'}}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* END CARD  */}

      </Container>
    </>
  );
}

export default App;
