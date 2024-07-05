

export function MakeLink({ url, name }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className="text-red-500 hover:text-red-700 underline"
        >
            {name}
        </a>
    );
}