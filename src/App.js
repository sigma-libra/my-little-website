import './App.css';
import BasicTimeline from "./curriculum/BasicTimeLine";
import ImageCarousel from "./curriculum/ImageCarrousel";
import ProfileBar from "./profile/ProfileBar";
import SkillsBar from "./skills/SkillsBar";


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


function CurriculumBar() {
  return (
    <div className="curriculum-outer-section" >
      <div className="curriculum-inner-section">
        <h2>Curriculum</h2>
        <BasicTimeline />
      </div>
      <ImageCarousel />
    </div>
  )
}