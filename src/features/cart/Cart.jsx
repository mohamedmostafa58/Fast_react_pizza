import { Link } from "react-router-dom";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearcart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mt-4 p-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline "
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-6 font-semibold mb-4">Your cart, {username}</h2>
      <ul className="divide-y">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-2 space-x-3">
        <Button to="/order/new" type="small">
          Order pizzas
        </Button>
        <button
          className="border border-slate-400 py-2 px-2 rounded-2xl hover:bg-stone-800 text-slate-400"
          onClick={() => {
            dispatch(clearcart());
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
