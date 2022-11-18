import { useShoppingCart } from "./../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";
import { FiPlusCircle } from "react-icons/fi";
import { GrSubtractCircle } from "react-icons/gr";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  const handleRemove = () => {
    decreaseCartQuantity(id);
  };

  const handleAdd = () => {
    increaseCartQuantity(id);
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
          borderRadius: "5px",
        }}
      />
      <div className="d-flex flex-column">
        <div>
          {item.name}
          <span className="text-muted"> x{quantity}</span>
        </div>
        <span>{formatCurrency(quantity * Number(item.price))}</span>
      </div>
      <div className="ms-auto d-flex align-items-center justify-content-center">
        <Button variant="none" style={{ padding: "0px" }} onClick={handleAdd}>
          <FiPlusCircle
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
          />
        </Button>
        <Button
          variant="none"
          style={{ padding: "0px" }}
          onClick={handleRemove}
        >
          <GrSubtractCircle
            style={{
              height: "29px",
              width: "29px",
              color: "gray",
            }}
          />
        </Button>
      </div>
    </Stack>
  );
}
