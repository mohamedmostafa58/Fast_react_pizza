import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:p-5 flex items-center justify-between">
      <p className="text-stone-300 space-x-10">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
