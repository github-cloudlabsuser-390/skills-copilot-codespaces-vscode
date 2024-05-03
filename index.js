import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * MarkdownEditor component.
 *
 * @returns {JSX.Element} The MarkdownEditor component.
 */
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;
