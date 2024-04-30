import React from 'react';
import './App.css';
import SnippetDisplay from './components/SnippetDisplay';
import TextInput from './components/TextInput';


const App: React.FC = () => {
    const snippet = "const add = (a, b) => a + b;";  // Example snippet

    const handleInputChange = (input: string): void => {
        console.log("User is typing: ", input);
    };

    return (
        <div className="App">
            <h1>Code Typing Test</h1>
            <SnippetDisplay snippet={snippet} />
            <TextInput onInputChange={handleInputChange} snippet={snippet}/>
        </div>
    );
};

export default App;
