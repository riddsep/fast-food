import { Link } from "react-router";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-stone-200">
      <p className="space-x-4 font-semibold uppercase text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
