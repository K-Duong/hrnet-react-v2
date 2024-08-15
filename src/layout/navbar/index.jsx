import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

import "./style.css";
function Navbar() {
  return (
    <nav className="navbar flex flex-row justify-between items-center bg-primary p-4">
      <Link>
        <img id="logo" src={logo} alt="logo Wealth Health" />
      </Link>
      <ul className="flex flex-row gap-x-4 text-white ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/employee-list"}>Employees list</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
