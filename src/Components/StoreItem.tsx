import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";
import { useShoppingCart } from "./../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  description,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card style={{ height: "550px" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title
          style={{
            textAlign: "center",
            fontFamily: "Petit Formal Script, cursive",
            fontWeight: "bold",
          }}
        >
          {name}
        </Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center h-10">
          <div>
            <Card.Text>Starting at {formatCurrency(price)}</Card.Text>
          </div>
          <Button
            variant="outline-dark"
            onClick={() => increaseCartQuantity(id)}
          >
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
