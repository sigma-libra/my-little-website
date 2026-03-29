import { motion } from 'framer-motion';
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
    [<FaCertificate key="2" />, "Certified Scrum Master"],
    [<FaPeopleCarry key="3" />, "Cross-Team Collaboration"],
    [<FaBrain key="5" />, "Machine Learning"],
    [<FaPhone key="6" />, "App Development"],
];

const TechStackMap = [
    {
        title: 'Infrastructure',
        content: ["Kubernetes", "Helm", "Docker", "AWS", "Kafka", "Temporal", "Terraform"],
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
        title: "Databases",
        content: ["SQL", "Postgres", "MongoDB", "DynamoDB", "Elasticsearch", "Kafka", "Clickhouse"]
    },
    {
        title: "Project Management",
        content: ["Git", "CI/CD Pipelines", "JIRA", "Confluence"]
    },
    {
        title: "Mobile Development",
        content: ["Flutter"]
    },
];

const HobbyList = ["Coding", "Reading", "Writing", "Gardening", "Cooking", "Hiking", "Running", "Travel", "Dancing"];

const PassionKeywords = ["Mentoring", "Writing", "Coding", "Learning", "Dancing", "Travelling"];

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
        <motion.div
            className={`skills-section text-white h-full bg-mossGreen ${params}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="bg-darkGrey mx-4 my-4 p-4 border-2 border-cactusGreen">
                <h2 className="font-display italic text-center text-2xl font-normal text-cactusGreen mb-3">About Me</h2>
                <p className="font-sans text-base leading-relaxed text-justify">
                    I'm a full-stack software engineer and site reliability engineer. I grew up in Europe
                    with US-Swiss dual citizenship and have lived, studied, and worked in several countries.
                    I love building practical software, reading classical literature, and traveling to visit
                    ancient ruins. Currently a digital nomad in the US — tell me a place I should explore!
                </p>
            </div>
            <HorizontalTabs tabs={tabs} defaultTab={0} />
        </motion.div>
    )
}
