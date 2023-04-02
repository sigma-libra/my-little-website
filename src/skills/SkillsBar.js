import KeywordList from "./Keywords";
import SkillTabs from "./SkillTabs";

function SkillsBar() {
    return (
        <div className="skills-section">
            <SkillTabs tabs={tabs} defaultTab={1} />
        </div>
    )
}

export default SkillsBar;


const SkillsList = ["Architecture Design", "API Design (REST, Async)", "Database Design",
    "End-to-end Testing", "DevOps", "Product Integration", "Machine Learning"];

const TechStackList = ["Kubernetes", "Helm", "Docker", "AWS",
    "Java (+ Spring + Junit)", "Kotlin", "Go", "C++", "JavaScript (+ HTML + CSS)",
    "Python (+ Flask + Pandas)", "Jupyter Notebook", "Pytorch", "Spark", "Hadoop",
    "Kafka", "Flutter", "React", "SQL (+ Postgres)", "MongoDB", "DynamoDB", "Elasticsearch",
    "Linux", "Git", "CI/CD Pipelines", "JIRA + Confluence", "SCRUM"];

const HobbyList = ["Coding", "Reading", "Writing", "Salsa", "Hiking", "Travelling", "Long-distance Running", "Winter Swimming"];

const PassionList = ["Clean Code", "Mentoring"];

const tabs = [
    {
        label: 'Skills',
        content: <KeywordList keywords={SkillsList} />
    },
    {
        label: 'Tech Stack',
        content: <KeywordList keywords={TechStackList} />
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