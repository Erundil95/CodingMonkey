import React from 'react';

interface SnippetDisplayProps {
    snippet: string;
}

const SnippetDisplayProps: React.FC<SnippetDisplayProps> = ({ snippet }) => {
    return (
        <div className="snippet-display">
            <code>{snippet}</code>
        </div>
    );
}

export default SnippetDisplayProps;


