import { Link, Outlet } from "react-router-dom";
export default function Hero() {
  return (
    <div id="heroContainer">
      <div id="title">
        <div id="titleMain">
          <h1>Florida man turned developer...</h1>
          <p>
            After 9 years in the nursing field, I decided that it was time for a
            change of pace. The technical aspects of both fields is what drew me
            to development.
          </p>
        </div>
        <div id="titleButtons">
          <Link to="MyWork">
            <div id="myWork">
              <h3>My work</h3>
            </div>
          </Link>
          {/* <div
            id="contactMe"
            onClick={() => {
              document.querySelector("#Modal").classList.add("activeModal");
            }}
          >
            <h3>Contact Me</h3>
          </div> */}
        </div>
      </div>
      <div id="hook"></div>
    </div>
  );
}
