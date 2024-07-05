import ProfileBar from "./profile/ProfileBar";
import SkillsBar from "./skills/SkillsBar";
import CurriculumBar from "./curriculum/CurriculumBar";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const imageUrl = `${process.env.PUBLIC_URL}/assets/images/rose.jpg`;
  const isMobile = useMediaQuery('(max-width:1000px)');

  if (isMobile) {
    return (
      <div className="flex flex-col w-screen items-center justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <ProfileBar />
        <CurriculumBar />
        <SkillsBar />
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen justify-between" style={{ backgroundImage: `url(${imageUrl})` }}>
        <ProfileBar/>
        <CurriculumBar />
        <SkillsBar/>
    </div>
  );
}