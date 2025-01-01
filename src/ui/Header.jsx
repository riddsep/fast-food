import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Food Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
