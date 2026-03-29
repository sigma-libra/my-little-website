

export function MakeLink({ url, name, className }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={className ?? "text-white hover:text-cactusGreen underline decoration-white/50 hover:decoration-cactusGreen transition-colors duration-200"}
        >
            {name}
        </a>
    );
}