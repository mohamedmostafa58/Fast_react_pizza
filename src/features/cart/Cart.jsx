import { Link } from "react-router-dom";
import Button from "../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="mt-4 p-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline "
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-6 font-semibold mb-4">Your cart, %NAME%</h2>
      <ul className="divide-y">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-2 space-x-3">
        <Button to="/order/new" type="small">
          Order pizzas
        </Button>
        <button className="border border-slate-400 py-2 px-2 rounded-2xl hover:bg-stone-800 text-slate-400">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
