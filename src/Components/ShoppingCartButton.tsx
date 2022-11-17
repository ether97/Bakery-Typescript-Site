import { Button } from "react-bootstrap";
import type * as CSS from "csstype";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useLocation } from "react-router-dom";

const smallCircle: CSS.Properties = {
  position: "absolute",
  height: "40px",
  width: "40px",
  backgroundColor: "maroon",
  bottom: "0px",
  color: "white",
  borderRadius: "50%",
  right: "0px",
  transform: "translate(10%, 10%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
};

export function ShoppingCartButton() {
  const location = useLocation();
  const btnDesign =
    location.pathname === "/store" ? "outline-dark" : "outline-light";
  const { openCart, cartQuantity } = useShoppingCart();
  const shoppingCartBtn: CSS.Properties = {
    position: "fixed",
    bottom: "50px",
    left: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    width: "100px",
  };
  return (
    <Button
      onClick={openCart}
      variant={btnDesign}
      className="rounded-circle"
      style={shoppingCartBtn}
    >
      <FaShoppingCart style={{ scale: "2" }} />
      <div style={smallCircle}>{cartQuantity}</div>
    </Button>
  );
}
