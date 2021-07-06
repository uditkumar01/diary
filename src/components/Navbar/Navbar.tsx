import "./Navbar.css";
import { Button } from "../Button/Button";

export function Navbar(): JSX.Element {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand">
          <img src="/images/logoDiary.png" alt="logo" height="45" width="45" />
          <h3>
            Diary<span>.com</span>
          </h3>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            Home <hr />
          </li>
          <li className="nav-link">
            Product
            <hr />
          </li>
          <li className="nav-link">
            About
            <hr />
          </li>
        </ul>
        <div className="nav-extra-link">
          <Button variant="outline" type="button">
            Sign up
          </Button>
          <Button type="button">Login</Button>
        </div>
      </div>
    </div>
  );
}
