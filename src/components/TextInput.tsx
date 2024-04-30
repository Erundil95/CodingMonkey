// src/components/TextInput.tsx

import React, {useState} from "react";

interface TextInputProps {
    onInputChange: (input: string) => void;
    snippet: string;
}

const TextInput: React.FC<TextInputProps> = ({ onInputChange, snippet}) =>{
    const [input, setInput] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setInput(value);
        onInputChange(value); //pass input to the parent component
    };

    const isCorrect = input == snippet;

    return (
        <div>
            <textarea
                className="text-input"
                value={input}
                onChange={handleChange}
                rows={10}
                placeholder="Start typing..."
                style={{ width: '100%', fontFamily: 'monospace'}}
            />
            {/* Display feedback based on correctness */}
            {input && !isCorrect && <p style={{ color: 'red'}}> Keep typing...</p>}
            {isCorrect && <p style={{ color: 'green'}}> Correct</p>}
        </div>
    );
};

export default TextInput;