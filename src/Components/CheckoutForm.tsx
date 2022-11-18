import { Button, Modal, Container, Stack } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import type * as CSS from "csstype";
import { FaAmazon, FaPaypal, FaGooglePay } from "react-icons/fa";
import { CartItem } from "./CartItem";
import { InputForm } from "./InputForm";
import { InputGroup, Form } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

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
      <Container className="d-flex" style={{ gap: "50px", overflow: "auto" }}>
        <div className="d-flex justify-content-center w-50 flex-column ">
          <div
            className="d-flex justify-content-center w-100 flex-column"
            style={{ gap: "20px" }}
          >
            <h1>hello,</h1>
            <p>
              <a
                href=""
                onClick={(e) => handleClick(e)}
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
          <InputForm handleClick={handleClick} />
        </div>
        <div
          className="d-flex w-50 h-100 flex-column align-items-center overflow-auto"
          style={{ backgroundColor: "rgb(0,0,0,0.1)" }}
        >
          <div className="d-flex flex-column" style={{ width: "80%" }}>
            <Stack className="mt-5" gap={3} style={{ overflow: "auto" }}>
              {cartItems.map((item) => (
                <div>
                  <CartItem key={item.id} {...item} />
                </div>
              ))}
              <div
                style={{
                  height: "1px",
                  width: "95%",
                  backgroundColor: "rgb(0,0,0,0.2)",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div
                className="justify-content-between"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <InputGroup>
                  <Form.Control
                    aria-label="Discount Code"
                    placeholder="Gift card or discount code"
                    required
                  />
                </InputGroup>
                <Button variant="secondary">Apply</Button>
              </div>
              <div
                style={{
                  height: "1px",
                  width: "95%",
                  backgroundColor: "rgb(0,0,0,0.2)",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted">Subtotal</p>
                <p className="fw-bold">
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted">Shipping</p>
                <p className="fw-bold">---</p>
              </div>
              <div
                style={{
                  height: "1px",
                  width: "95%",
                  backgroundColor: "rgb(0,0,0,0.2)",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="">Total</p>
                <p className="fw-bold" style={{ fontSize: "1.5rem" }}>
                  <span className="text-muted" style={{ fontSize: "1rem" }}>
                    USD{" "}
                  </span>
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </p>
              </div>
            </Stack>
          </div>
        </div>
      </Container>
    </Modal>
  );
}
