import './SkillsBar.css';
import '../App.css';
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


const HobbyList = ["Coding", "Reading", "Writing", "Salsa", "Gardening", "Baking", "Hiking", "Running", "Winter-Swimming", "Travel"];

const PassionKeywords = ["Coding", "Mentoring", "Learning"];

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

export default function SkillsBar() {
    return (
        <div className="skills-section">
            <div className="summary-card">
                <h2 style={{ textAlign: 'center' }}>About Me</h2>
                <p>Software engineer with US-Swiss dual citizenship and experience working in many different cultures. Has a Master's Degree in Computer Science and published research in the machine learning space. Experienced in building scalable, resilient software for the Cloud. Slightly fanatic about code readability, test coverage and proper documentation. Passionate about teaching and mentorship. Currently moonlighting in app development.</p>
            </div>
            <HorizontalTabs tabs={tabs} defaultTab={3} />
        </div>
    )
}
