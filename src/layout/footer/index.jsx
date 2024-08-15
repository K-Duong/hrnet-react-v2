import logo from "../../assets/logo/logo.png";

import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-secondary">
      <div className="logo-copyright flex items-center gap-x-2">
        <img id="logo-footer" src={logo} alt="logo Wealth Health" />
        <p id="copyright">Copyright © 2024 WealthHealth</p>
      </div>
      <ul className="footer-links flex gap-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>FAQ</Link>
      </ul>
    </footer>
  );
}

export default Footer;
