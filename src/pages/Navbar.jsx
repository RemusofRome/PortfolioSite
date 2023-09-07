import { Link, Outlet } from "react-router-dom";
import "../App.css";
import Modal from "../Functions/functions";
import theme from "../assets/imgs/theme=light.png";

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div id="nameContainer">
          <img src={theme}></img>
          <Link to="/">
            <h3 id="name">Brandon Flach</h3>
          </Link>
        </div>
        <div id="navigation">
          <Link  to="MyWork">
            <h3>My work</h3>
          </Link>
          <Link  to="aboutMe">
            <h3>About Me</h3>
          </Link>
          <a href="https://github.com/RemusofRome" target="_blank">
            <h3>Github</h3>
          </a>
          <button className="navbar-primary"
            onClick={() => {
              document.querySelector("#Modal").classList.add("activeModal");
            }}>
            Contact me
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
