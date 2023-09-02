import profile from "../assets/imgs/profile.png";

export default function AboutMe() {
  return (
    <div id="aboutMeContainer">
      <h1>About Me</h1>
      <img id="profileImg" src={profile}></img>
      <h2>Brandon Flach</h2>
      <p>Welcome to my portfolio! With 9 years in the nursing profession and a desire for problem solving, I have found that Front End Web development has filled alot of requirements for me in a professional career. I am a life long learner and because Web development is always changing and improving this provides a solid career to harness a passion for learning.</p>
      <ul>
        <li>Proficient in CSS, HTML, JS, React, RESTful API, Routing and more </li>
        <li>Excellent problem solving and critical thinking</li>
        <li>Quality work under pressure</li>
        <li>Implemented company wide change in EHR system with minimal downtime</li>
        <li>4 years in nursing managment</li>
        <li>Excellent written and verbal communication</li>
      </ul>
    </div>
  );
}
