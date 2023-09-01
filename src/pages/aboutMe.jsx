import profile from "../pictures/profile.png";

export default function AboutMe() {
  return (
    <div id="aboutMeContainer">
      <h1>About Me</h1>
      <img id="profileImg" src={profile}></img>
      <h2>Brandon Flach</h2>
      <p>I like long walks on the beach</p>
      <ul>
        <li>Ding ding </li>
      </ul>
    </div>
  );
}
