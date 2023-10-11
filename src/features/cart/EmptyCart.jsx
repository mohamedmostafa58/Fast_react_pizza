import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="p-6">
      <Link to="/menu" className="text-blue-500 font-medium">
        &larr; Back to menu
      </Link>

      <p className="mt-4 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
