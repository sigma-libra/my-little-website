import './App.css';
import BasicTimeline from "./BasicTimeLine";


function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfileBar />
        <CurriculumBar />
        <SkillsBar />
      </div>
    </div>
  );
}

export default App;


function ProfileBar() {
  return (<div className="profile-section">
    <h1>Sabrina Kall</h1>
    <img src={require("./photos/profile_photo.jpg")} height={200} alt="profile_photo" />
    <h2>Software Engineer</h2>
    <p>Born 10th October 1996</p>
    <nav className="links-container">
      <a href="https://www.linkedin.com/in/sabrina-kall/" target="_blank" rel="noreferrer">linkedin</a>
      <a href="https://github.com/sigma-libra" target="_blank" rel="noreferrer">github</a>
      <a href="https://stackoverflow.com/users/8788182/sigma1510" target="_blank" rel="noreferrer">stackoverflow</a>
    </nav>
    <h2>Languages</h2>
    <p>English</p>
    <p>French</p>
    <p>(Swiss) German</p>
    <p>Spanish</p>
  </div>)
}

function CurriculumBar() {
  return (
    <div className="curriculum-outer-section" >
      <div className="curriculum-inner-section">
        <h1>Curriculum</h1>
        <BasicTimeline />
      </div>
      <img src={require("./photos/epfl.jpg")} alt="epfl_photo" style={{ maxWidth: "100%" }} />
    </div>
  )
}

function SkillsBar() {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <ul>
        <li>Java</li>
        <li>Kotlin</li>
        <li>Go</li>
      </ul>
      <h1>Hobbies</h1>
      <ul>
        <li>Coding</li>
        <li>Salsa</li>
        <li>Jogging</li>
        <li>Reading</li>
      </ul>
      <h1>Passions</h1>
    </div>
  )
}