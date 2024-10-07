export default function RightArrowIcon() {
    return (
        <svg 
            fill="currentColor" 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            id="right" 
            data-name="Flat Line" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <line 
                id="primary" 
                x1="21" 
                y1="12" 
                x2="3" 
                y2="12" 
                style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} 
                stroke="currentColor"
            />
            <polyline 
                id="primary-2" 
                data-name="primary" 
                points="14 5 21 12 14 19" 
                style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }} 
                stroke="currentColor"
            />
        </svg>
    );
}
