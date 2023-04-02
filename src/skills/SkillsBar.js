import KeywordList from "./Keywords";
import SkillTabs from "./SkillTabs";

function SkillsBar() {
    return (
        <div className="skills-section">
            <SkillTabs tabs={tabs} defaultTab={1} />
            <h1>Skills</h1>
            <KeywordList keywords={["Architecture Design", "API Design (REST, Async)", "Database Design",
                "End-to-end Testing", "DevOps", "Product Integration", "Machine Learning"]} />
            <h1>Tech Stack</h1>
            <KeywordList keywords={["Kubernetes", "Helm", "Docker", "AWS",
                "Java (+ Spring + Junit)", "Kotlin", "Go", "C++", "JavaScript (+ HTML + CSS)",
                "Python (+ Flask + Pandas)", "Jupyter Notebook", "Pytorch", "Spark", "Hadoop",
                "Kafka", "Flutter", "React", "SQL (+ Postgres)", "MongoDB", "DynamoDB", "Elasticsearch",
                "Linux", "Git", "CI/CD Pipelines", "JIRA + Confluence", "SCRUM"]} />
            <h1>Hobbies</h1>
            <KeywordList keywords={["Coding", "Reading", "Writing", "Salsa", "Hiking", "Travelling", "Long-distance Running", "Winter Swimming"]} />
            <h1>Passions</h1>
            <KeywordList keywords={["Clean Code", "Mentoring"]} />
        </div>
    )
}

export default SkillsBar;

const tabs = [
    {
        label: 'Tab 1',
        content: <div>Tab 1 content goes here</div>
    },
    {
        label: 'Tab 2',
        content: <div>Tab 2 content goes here</div>
    },
    {
        label: 'Tab 3',
        content: <div>Tab 3 content goes here</div>
    }
];