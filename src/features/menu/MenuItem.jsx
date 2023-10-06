import { formatCurrency } from "../utility/helpers";
import Button from "../ui/Button";
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">Add to card</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
