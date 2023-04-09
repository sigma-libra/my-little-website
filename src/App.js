import './App.css';
import ProfileBar from "./profile/ProfileBar";
import SkillsBar from "./skills/SkillsBar";
import CurriculumBar from "./curriculum/CurriculumBar";

function ImageComponent({ width, position }) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/rose.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        width: width,
      }}
    ></div>
  );
}



function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfileBar />
        <ImageComponent width={'8%'} position={'center'} />
        <CurriculumBar />
        <ImageComponent width={'2%'} position={'left'} />
        <SkillsBar />
      </div>
    </div>
  );
}

export default App;
