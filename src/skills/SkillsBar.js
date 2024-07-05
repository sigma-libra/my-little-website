import HorizontalTabs from "./HorizontalTabs";
import UnfoldingTabs from "./stack/UnfoldingTabs";
import IconList from "./expertise/IconList";
import { FaBrain, FaCertificate, FaClipboard, FaCloud, FaCode, FaCogs, FaDatabase, FaNetworkWired, FaPeopleCarry, FaPhone, FaServer } from 'react-icons/fa';
import KeywordBubbles from "./hobbies/KeywordBubbles";
import KeywordTree from "./passions/KeywordTree";

const SkillsList = [
    [<FaCode key="1" />, "Fullstack Development"],
    [<FaServer key="7" />, "Architecture Design"],
    [<FaCloud key="8" />, "API Design (REST, Async)"],
    [<FaDatabase key="9" />, "Database Design"],
    [<FaClipboard key="10" />, "Testing"],
    [<FaCogs key="11" />, "DevOps"],
    [<FaNetworkWired key="4" />, "Product Integration"],
    [<FaCertificate key="2" />, "Certified SCRUM Master"],
    [<FaPeopleCarry key="3" />, "Cross-Team Collaboration"],
    [<FaBrain key="5" />, "Machine Learning"],
    [<FaPhone key="6" />, "App Development"],
];

const TechStackMap = [
    {
        title: 'Infrastructure',
        content: ["Kubernetes", "Helm", "Docker", "AWS", "Kafka"],
    },
    {
        title: 'Backend Development',
        content: ["Java (+ Spring)", "Kotlin", "Go", "C++", "Python"],
    },
    {
        title: 'Frontend Development',
        content: ["JavaScript", "HTML", "CSS", "React"],
    },
    {
        title: 'Data Science',
        content: ["Python", "Pandas", "Jupyter Notebook", "Pytorch", "Spark", "Hadoop"],
    },
    {
        title: "Mobile Development",
        content: ["Flutter"]
    },
    {
        title: "Databases",
        content: ["SQL", "Postgres", "MongoDB", "DynamoDB", "Elasticsearch", "Kafka"]
    },
    {
        title: "Project Management",
        content: ["Git", "CI/CD Pipelines", "JIRA", "Confluence"]
    }
];

const HobbyList = ["Coding", "Reading", "Writing", "Gardening", "Cooking", "Hiking", "Running", "Travel", "Dancing"];

const PassionKeywords = ["Coding", "Mentoring", "Learning", "Dancing"];

const tabs = [
    {
        label: 'Skills',
        content: <div className="summary-card"><IconList listItems={SkillsList} /></div>
    },
    {
        label: 'Tech Stack',
        content: <UnfoldingTabs content={TechStackMap} />
    },
    {
        label: 'Hobbies',
        content: <div className="lake-card"><KeywordBubbles keywords={HobbyList} /></div>
    },
    {
        label: 'Passions',
        content: <KeywordTree words={PassionKeywords} />
    }
];

export default function SkillsBar({params}) {
    return (
        <div className={`text-white h-full bg-mossGreen ${params}`}>
            <div className="bg-darkGrey mx-4 my-4 p-4 border-2 border-cactusGreen">
                <h2 className="text-center text-2xl font-bold">About Me</h2>
                <p>
                    Hi, my name is Sabrina and I'm a full-stack software engineer, welcome to my little Reactjs project!
                    Here's a little about me: I grew up in Europe with US-Swiss dual citizenship and have lived,
                    studied and worked in several countries since. I love creating practical software applications for every-day use,
                    reading classical literature and travelling to visit ancient ruins.
                    I'm passionate about rectifying the gender imbalance in the engineering world.
                    Currently, I'm moonlighting in smartphone app development.
                </p>
            </div>
            <HorizontalTabs tabs={tabs} defaultTab={0} />
        </div>
    )
}
