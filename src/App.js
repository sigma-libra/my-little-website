import './App.css';
import BasicTimeline from "./BasicTimeLine";


function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}

export default App;


function LeftBar() {
  return (<div className="left-section">
    <h1>Sabrina Kall</h1>
    <img src={require("./profile_photo.jpg")} height={200} alt="profile_photo" />
    <h2>Software Engineer</h2>
    <p>Born 10th October 1996</p>
    <nav className="links-container">
      <a href="https://www.linkedin.com/in/sabrina-kall/" target="_blank" rel="noreferrer">linkedin</a>
      <a href="https://github.com/sigma-libra" target="_blank" rel="noreferrer">github</a>
      <a href="https://stackoverflow.com/users/8788182/sigma1510" target="_blank" rel="noreferrer">stackoverflow</a>
    </nav>
  </div>)
}

function RightBar() {
  return (
    <div className="right-section">
      <h1>Curriculum</h1>
      <BasicTimeline />
      <h1>Hobbies</h1>
      <ul>
        <li>Coding</li>
        <li>Salsa</li>
        <li>Jogging</li>
        <li>Reading</li>
      </ul>
      <h1>Skills</h1>
      <h1>Passions</h1>
    </div>
  )
}