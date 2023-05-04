import { Link } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
