import ProfileBar from "./profile/ProfileBar";
import SkillsBar from "./skills/SkillsBar";
import CurriculumBar from "./curriculum/CurriculumBar";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const imageUrl = `${process.env.PUBLIC_URL}/assets/images/rose.jpg`;
  const isMobile = useMediaQuery('(max-width:1000px)');

  if (isMobile) {
    return (
      <div className="flex flex-col w-screen h-full items-center justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <ProfileBar params={"w-3/4 mb-10"}/>
        <SkillsBar params={"w-3/4 mb-10"} />
        <CurriculumBar params={"w-3/4 mb-10"} />
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen justify-between" style={{ backgroundImage: `url(${imageUrl})` }}>
        <ProfileBar params={"w-1/4 overflow-y-auto"}/>
        <CurriculumBar  params={"w-1/3 overflow-y-auto"}/>
        <SkillsBar params={"w-1/3 overflow-y-auto"} />
    </div>
  );
}