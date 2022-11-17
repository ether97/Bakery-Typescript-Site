import { Button, Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";
import { CartItem } from "../Components/CartItem";
import { formatCurrency } from "./../utilities/formatCurrency";
import storeItems from "../data/items.json";
import type * as CSS from "csstype";

const checkoutButton: CSS.Properties = {
  margin: "50px",
};

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, openForm } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="start">
      <Offcanvas.Header closeButton style={{ textAlign: "center" }}>
        <Offcanvas.Title
          className="m-auto"
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "Petit Formal Script, cursive",
          }}
        >
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5 ">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      {cartItems.length > 0 ? (
        <Button
          variant="outline-dark"
          onClick={openForm}
          style={checkoutButton}
        >
          Checkout
        </Button>
      ) : (
        ""
      )}
    </Offcanvas>
  );
}
