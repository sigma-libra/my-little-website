import './App.css';
import ProfileBar from "./profile/ProfileBar";
import SkillsBar from "./skills/SkillsBar";
import CurriculumBar from "./curriculum/CurriculumBar";


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
