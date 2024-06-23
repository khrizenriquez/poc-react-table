import React, { useState, memo } from 'react';

const ReadMore = memo(({ text }) => {
    const maxLength = 50;
    const [showFullText, setShowFullText] = useState(false);

    if (text.length <= maxLength) return <span>{text}</span>;

    return (
        <span>
            {showFullText ? text : `${text.substring(0, maxLength)}...`}
            <button
                onClick={() => setShowFullText(!showFullText)}
                aria-label={showFullText ? 'Show less' : 'Show more'}
            >
                {showFullText ? 'Read less' : 'Read more'}
            </button>
        </span>
    );
});

export default ReadMore;
