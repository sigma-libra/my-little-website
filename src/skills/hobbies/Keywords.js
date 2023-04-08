import './Keywords.css';

export default function KeywordList({ keywords }) {
    return (
        <div className="keyword-list">
            {keywords.map((keyword) => (
                Keyword(keyword = { keyword })
            ))}
        </div>
    );
}

export function Keyword({ keyword }) {
    return (
        <div key={keyword} className="keyword">
            {keyword}
        </div>
    )
}