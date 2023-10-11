import Button from "../ui/Button";
import { formatCurrency } from "../utility/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, quantity, totalPrice, pizzaId } = item;

  return (
    <li className="flex  flex-col sm:flex-row sm:justify-between py-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-baseline gap-5 sm:gap-2 justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="sm:flex gap-4">
          <UpdateItemQuantity quantity={quantity} id={pizzaId} />
          <DeleteItem id={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
