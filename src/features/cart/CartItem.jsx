import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-5">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <button className="rounded-full bg-yellow-500 px-4 py-1 text-sm">
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
