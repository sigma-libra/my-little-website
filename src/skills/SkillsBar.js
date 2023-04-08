import './SkillsBar.css';
import KeywordList from "./hobbies/Keywords";
import HorizontalTabs from "./HorizontalTabs";
import UnfoldingTabs from "./stack/UnfoldingTabs";
import IconList from "./expertise/IconList";
import { FaBrain, FaCertificate, FaClipboard, FaCloud, FaCode, FaCogs, FaDatabase, FaNetworkWired, FaPeopleCarry, FaPhone, FaServer } from 'react-icons/fa';
import KeywordBubbles from "./passions/KeywordBubbles";


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


const HobbyList = ["Coding", "Reading", "Writing", "Salsa", "Gardening", "Baking", "Hiking", "Running", "Winter-Swimming", "Travel"];

const PassionKeywords = ['Coding', 'Mentoring', 'Learning'];

const tabs = [
    {
        label: 'Skills',
        content: <IconList listItems={SkillsList} />
    },
    {
        label: 'Tech Stack',
        content: <UnfoldingTabs content={TechStackMap} />
    },
    {
        label: 'Hobbies',
        content: <KeywordBubbles keywords={HobbyList} />
    },
    {
        label: 'Passions',
        content: <KeywordBubbles keywords={PassionKeywords} />
    }
];

export default function SkillsBar() {
    return (
        <div className="skills-section">
            <HorizontalTabs tabs={tabs} defaultTab={3} />
        </div>
    )
}
