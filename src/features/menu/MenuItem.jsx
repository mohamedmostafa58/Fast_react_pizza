import { formatCurrency } from "../utility/helpers";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const dispacth = useDispatch();
  const quantity = useSelector(
    (state) => state.cart.cart.find((item) => item.pizzaId === id)?.quantity
  );
  const handleClick = () => {
    const newItem = {
      pizzaId: pizza.id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispacth(addItem(newItem));
  };
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-40 ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex flex-col justify-center gap-1 w-full">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="flex justify-between items-baseline w-full pr-2 sm:pr-10">
          <div className="mt-6 text-slate-500">
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>
          {soldOut ? (
            ""
          ) : quantity > 0 ? (
            <div className="sm:flex gap-4">
              <UpdateItemQuantity quantity={quantity} id={id} />
              <DeleteItem id={id} />
            </div>
          ) : (
            <Button type="small" onClick={handleClick}>
              Add to card
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
