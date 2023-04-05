import './SkillsBar.css';
import KeywordList from "./Keywords";
import SkillTabs from "./SkillTabs";
import Pyramid from "./Pyramid";
import UnfoldingTabs from "./UnfoldingTabs";

function SkillsBar() {
    return (
        <div className="skills-section">
            <SkillTabs tabs={tabs} defaultTab={1} />
            <div className="skills-photo">
                <img src={`${process.env.PUBLIC_URL}/assets/images/rose.jpg`} height={200} alt="rose_photo" />
            </div>
        </div>
    )
}

export default SkillsBar;


const SkillsList = [["Fullstack Development"], ["SCRUM", "Cross-Team Collaboration"], ["Product Integration", "Machine Learning", "App Development"], ["Architecture Design", "API Design (REST, Async)", "Database Design",
    "Testing", "DevOps"]];


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


const HobbyList = ["Coding", "Reading", "Writing", "Salsa", "Hiking", "Travelling", "Long-distance Running", "Winter Swimming"];

const PassionList = ["Clean Code", "Mentoring"];

const tabs = [
    {
        label: 'Skills',
        content: <Pyramid rows={SkillsList} />
    },
    {
        label: 'Tech Stack',
        content: <UnfoldingTabs content={TechStackMap} />
    },
    {
        label: 'Hobbies',
        content: <KeywordList keywords={HobbyList} />
    },
    {
        label: 'Passions',
        content: <KeywordList keywords={PassionList} />
    }
];