import './Keywords.css';

export default function KeywordList({ keywords }) {
    return (
        <div className="keyword-list">
            {keywords.map((keyword) => (
                <div key={keyword} className="keyword">
                    {keyword}
                </div>
            ))}
        </div>
    );
}