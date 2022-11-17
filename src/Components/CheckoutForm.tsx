import { Form, Button, Modal, Container, InputGroup } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import type * as CSS from "csstype";
import { FaAmazon, FaPaypal, FaGooglePay } from "react-icons/fa";

const formCloseButton: CSS.Properties = {
  margin: "20px",
  backgroundColor: "transparent",
  border: "none",
};

type CheckoutFormProps = {
  formIsOpen: boolean;
};

export function CheckoutForm({ formIsOpen }: CheckoutFormProps) {
  const { closeForm, cartItems } = useShoppingCart();

  const handleClick = (e: React.ChangeEvent<EventTarget>): void => {
    e.preventDefault();
    closeForm();
  };
  return (
    <Modal show={formIsOpen} fullscreen={true} onHide={closeForm}>
      <Button style={formCloseButton} onClick={closeForm}>
        <AiOutlineCloseCircle
          style={{ color: "black", scale: "2", float: "right" }}
        />
      </Button>
      <Container>
        <div
          className="d-flex justify-content-center w-50 flex-column"
          style={{ gap: "20px" }}
        >
          <h1>hello,</h1>
          <p>
            <a
              href=""
              onClick={(e) => handleClick}
              style={{ textDecoration: "none" }}
            >
              Cart
            </a>{" "}
            &gt; Customer Information &gt;{" "}
            <span className="text-muted">Shipping Method</span> &gt;{" "}
            <span className="text-muted">Payment Method</span>
          </p>
          <div
            className="d-flex align-items-center justify-content-center w-100"
            style={{ height: "50px", gap: "30px" }}
          >
            <Button size="lg" variant="warning" style={{ width: "200px" }}>
              <FaAmazon />
            </Button>
            <Button size="lg" variant="warning" style={{ width: "200px" }}>
              <FaPaypal />
            </Button>
            <Button size="lg" variant="dark" style={{ width: "200px" }}>
              <FaGooglePay style={{ scale: "2" }} />
            </Button>
          </div>
          <p className="text-muted" style={{ textAlign: "center" }}>
            -----------------------------------OR-----------------------------------
          </p>
        </div>
        <Form className="m-3 w-50">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Information</Form.Label>
            <Form.Label style={{ float: "right" }}>
              Already have an account? <a href="/">Log in</a>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Keep me up to date on news and exclusive offers"
            />
          </Form.Group>
          <Form.Group></Form.Group>
          <Form.Group style={{}}>
            <InputGroup className="mt-2">
              <Form.Control
                style={{ marginRight: "2px" }}
                aria-label="First name"
                placeholder="First name"
              />
              <Form.Control
                style={{ marginLeft: "2px" }}
                aria-label="Last name"
                placeholder="Last name"
              />
            </InputGroup>
            <Form.Control
              className="mt-2"
              type="email"
              placeholder="Company (optional)"
            />
            <Form.Control className="mt-2" type="email" placeholder="Address" />
            <Form.Control
              className="mt-2"
              type="email"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <Form.Control className="mt-2" type="email" placeholder="City" />
            <InputGroup className="mt-2">
              <Form.Control
                style={{ marginRight: "2px" }}
                aria-label="Country"
                placeholder="Country"
              />
              <Form.Control
                style={{ marginLeft: "2px" }}
                aria-label="Postal Code"
                placeholder="Postal Code"
              />
            </InputGroup>
            <Form.Control
              className="mt-2"
              type="email"
              placeholder="Phone (optional)"
            />
          </Form.Group>
          <div
            className="d-flex align-items-center justify-content-between mt-3"
            style={{ height: "75px", width: "100%" }}
          >
            <p>
              <a
                onClick={(e) => handleClick}
                href=""
                style={{ textDecoration: "none" }}
              >
                &lt;Return to cart
              </a>
            </p>
            <Button
              variant="primary"
              type="submit"
              style={{ padding: "20px", float: "right" }}
            >
              Continue to Shipping Method
            </Button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
}
