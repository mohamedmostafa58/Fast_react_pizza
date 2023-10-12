import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utility/helpers";

function CartOverview() {
  const pizasCount = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0)
  );
  const pizasPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => {
      return (sum += item.totalPrice);
    }, 0)
  );
  if (!pizasCount) return null;
  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:p-5 flex items-center justify-between fixed bottom-0 w-full">
      <p className="text-stone-300 space-x-10">
        <span>{pizasCount} pizzas</span>
        <span>{formatCurrency(pizasPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
