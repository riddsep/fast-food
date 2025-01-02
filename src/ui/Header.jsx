import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Food Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
