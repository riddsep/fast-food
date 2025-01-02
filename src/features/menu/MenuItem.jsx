import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p>{name}</p>
        <p className="text-sm capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <button className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
