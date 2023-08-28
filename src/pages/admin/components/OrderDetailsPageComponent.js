import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const OrderDetailsPageComponent = ({ getOrder, markAsDelivered }) => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] =
    useState("Mark as Delivered");
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getOrder(id).then((order) => {
      setUserInfo(order.user);
      setPaymentMethod(order.paymentMethod);
      order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
      order.isDelivered
        ? setIsDelivered(order.deliveredAt)
        : setIsDelivered(false);
      setCartSubtotal(order.orderTotal.cartSubtotal);
      if (order.isDelivered) {
        setOrderButtonMessage("Order is Completed");
        setButtonDisabled(true);
      }
      setCartItems(order.cartItems);
    });
  }, [isDelivered, id]);
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.lastName} <br />
              <b>Adress</b>: {userInfo.address}
              {userInfo.city}
              {userInfo.state} {userInfo.zipCode} <br />
              <b>Phone</b>:{userInfo.phoneNumber} <br />
            </Col>

            <Col md={6}>
              <h2>Payment Method</h2>

              <Form.Select value={paymentMethod} disabled={true}>
                <option value="pp"> PayPal</option>
                <option value="cod">
                  Cash On Derivery(derivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Col>
              <Alert
                className="mt-3"
                variant={isDelivered ? "success" : "danger"}
              >
                {isDelivered ? (
                  <>Delivered at {isDelivered} </>
                ) : (
                  <>Not Delivered</>
                )}
              </Alert>
            </Col>
            <Col>
              <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                {isPaid ? <>Paid at {isPaid}</> : <>Not Paid yet</>}
              </Alert>
            </Col>
          </Row>
          <br />
          <h2>Order Items</h2>
          <ListGroup variant="fluid">
            {cartItems.map((item, idx) => (
              <CartItemComponent key={idx} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item Price (after tax):
              <span className="fw-bold">{cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping:<span className="fw-bold">Included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax:<span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total Price:<span className="fw-bold">{cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  onClick={()=>{
                    markAsDelivered(id)
                    .then((res)=>{
                        if(res){
                            setIsDelivered(true)   
                        }
                    })
                    .catch(er => console.log (er.response.data.message?er.response.data.message:er.response.data))
                  }}
                  disabled={buttonDisabled}
                  variant="danger"
                  type="button"
                >
                  {orderButtonMessage}
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPageComponent;
