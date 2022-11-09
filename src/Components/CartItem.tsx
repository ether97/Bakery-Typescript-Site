import { useShoppingCart } from "./../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";
import { AiOutlineCloseCircle } from "react-icons/ai";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  const handleClick = () => {
    removeFromCart(id);
  };
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
          border: "solid 1px black",
        }}
      />
      <div className="d-flex flex-column">
        <div>
          {item.name}
          <span className="text-muted"> x{quantity}</span>
        </div>
        <span>{formatCurrency(quantity * Number(item.price))}</span>
      </div>
      <Button className="ms-auto" variant="none" onClick={handleClick}>
        <AiOutlineCloseCircle
          style={{ height: "30px", width: "30px", color: "red" }}
        />
      </Button>
    </Stack>
  );
}
