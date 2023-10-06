import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder.";
import Username from "../user/Username";
const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase tracking-widest	p-3 flex items-center justify-between py-5 md:text-1xl">
      <Link to="/">fast react pizza co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
