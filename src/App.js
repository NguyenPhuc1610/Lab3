import {
  Container,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Carousel,
  Col,
  Card,
  Modal,
  Alert,
} from "react-bootstrap";
import img1 from "./Images/menu1.jpg";
import img2 from "./Images/menu2.jpg";
import img3 from "./Images/menu3.jpg";
import { useEffect, useState, useReducer } from "react";

const initialState = {
  cart: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": // Thêm sản phẩm vào giỏ hàng
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "INCREMENT_QUANTITY": // tăng số lượng sản phẩm trong giỏ hàng
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY": // giảm
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_FROM_CART": // xóa
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
// END REDUCER

// SHOW MODAL
function MyVerticallyCenteredModal({
  cart,
  show,
  onHide,
  dispatch,
  setShowAlert,
}) {
  // Hàm tính tổng tất cả sản phẩm
  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Kiểm tra có sản phẩm nà trong giỏ hàng không  */}
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <Row key={item.id} className="mb-3">
                <Col md={3}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col md={5}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <p>
                    Price:{" "}
                    <span style={{ color: "red", fontWeight: "500" }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </p>{" "}
                </Col>
                <Col md={4} className="d-flex align-items-center">
                  <Button
                    variant="secondary"
                    onClick={() =>
                      dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })
                    }
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })
                    }
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
                      setShowAlert(true);
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            <h5>
              Total Price:{" "}
              <span
                style={{ color: "red", fontSize: "30px", fontWeight: "500" }}
              >
                {calculateTotalPrice()}$
              </span>
            </h5>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
// END SHOW MODAL

function App() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // trạng thái thông báo

  const [state, dispatch] = useReducer(reducer, initialState);

  // FETCH API
  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.products);
        });
    };

    fetchProducts();
  }, []);
  // END FETCH API

  // sau 3s thông báo tự tắt
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <Container>
        {/* Alert Notification */}
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Product removed from cart successfully!
          </Alert>
        )}

        {/* NAVBAR */}
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Pizza House</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About us</Nav.Link>
                  <NavDropdown title="Contact" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Order now:{" "}
                  <span>
                    {state.cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </Button>
                <MyVerticallyCenteredModal
                  cart={state.cart}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  dispatch={dispatch}
                  setShowAlert={setShowAlert} // thông báo hiện
                />
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
                style={{ objectFit: "cover", height: "300px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={img2}
                alt="ảnh 2"
                className="d-block w-100"
                style={{ objectFit: "cover", height: "300px" }}
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
                style={{ objectFit: "cover", height: "300px" }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/*END Carousel */}

        {/* CARD  */}
        <Row className="mt-5">
          {data.map((item, _) => (
            <Col md={3} className="mb-3" key={item.id}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="card-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {item.description}
                  </Card.Text>
                  <Card.Text
                    className="red-price"
                    style={{
                      color: "red",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Price: {item.price.toFixed(2)}$
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* END CARD  */}
      </Container>
    </>
  );
}

export default App;
