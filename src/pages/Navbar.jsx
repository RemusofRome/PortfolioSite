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
          <a href="https://github.com/RemusofRome" target="_blank" className="github-css">
            <h3>Github</h3><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H5.33333C5.52222 0 5.68056 0.0638889 5.80833 0.191667C5.93611 0.319444 6 0.477778 6 0.666667C6 0.855556 5.93611 1.01389 5.80833 1.14167C5.68056 1.26944 5.52222 1.33333 5.33333 1.33333H1.33333V10.6667H10.6667V6.66667C10.6667 6.47778 10.7306 6.31944 10.8583 6.19167C10.9861 6.06389 11.1444 6 11.3333 6C11.5222 6 11.6806 6.06389 11.8083 6.19167C11.9361 6.31944 12 6.47778 12 6.66667V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333ZM10.6667 2.26667L4.93333 8C4.81111 8.12222 4.65556 8.18333 4.46667 8.18333C4.27778 8.18333 4.12222 8.12222 4 8C3.87778 7.87778 3.81667 7.72222 3.81667 7.53333C3.81667 7.34444 3.87778 7.18889 4 7.06667L9.73333 1.33333H8C7.81111 1.33333 7.65278 1.26944 7.525 1.14167C7.39722 1.01389 7.33333 0.855556 7.33333 0.666667C7.33333 0.477778 7.39722 0.319444 7.525 0.191667C7.65278 0.0638889 7.81111 0 8 0H12V4C12 4.18889 11.9361 4.34722 11.8083 4.475C11.6806 4.60278 11.5222 4.66667 11.3333 4.66667C11.1444 4.66667 10.9861 4.60278 10.8583 4.475C10.7306 4.34722 10.6667 4.18889 10.6667 4V2.26667Z" fill="#21201A"/>
</svg>
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
