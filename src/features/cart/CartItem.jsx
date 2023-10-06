import Button from "../ui/Button";
import { formatCurrency } from "../utility/helpers";

function CartItem({ item, order }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="flex  flex-col sm:flex-row sm:justify-between py-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-baseline gap-5 sm:gap-2 justify-between">
        <p>{formatCurrency(totalPrice)}</p>
        {!order && <Button type="small">delete</Button>}
      </div>
    </li>
  );
}

export default CartItem;
