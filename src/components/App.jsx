// import React, { useState } from 'react';
// import Input from './terminal_components/Input';
// import Output from './terminal_components/Output';
// import './App.css';

// function App() {
//     const [terminalPairs, setTerminalPairs] = useState([]);

//     const handleReturnCommand = (command) => {
//         const newPair = {
//             Output: <Output command={command} />,
//             Input: <Input onEnter={handleReturnCommand} disable={false} />,
//         };
//         setTerminalPairs(prevPairs => [...prevPairs, newPair]);
//     };

//     return (
//         <div className='terminal-container'>
//             <Input onEnter={handleReturnCommand} disable={false} />
//             {terminalPairs.map((pair, index) => (
//                 <div key={index}>
//                     {pair.Output}
//                     {pair.Input}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import Input from './terminal_components/Input';
import Output from './terminal_components/Output';
import './App.css';

function App() {
    const [key, setKey] = useState(0); // State to force re-rendering
    const [terminalPairs, setTerminalPairs] = useState([]);

    const handleReturnCommand = (command) => {
        if (command === 'clear') {
            // Reset the key to force re-rendering
            setKey(prevKey => prevKey + 1);
            // Clear the terminal by setting an empty array
            setTerminalPairs([]);
        } else {
            // Add new input-output pair for other commands
            const newPair = {
                Output: <Output command={command} />,
                Input: <Input onEnter={handleReturnCommand} disable={false} />,
            };
            setTerminalPairs(prevPairs => [...prevPairs, newPair]);
        }
    };

    return (
		<>
			<h1>Terminal</h1>
            <p>
                This is a simple terminal built with React.
            </p>
            <p>
                You can type commands in the input box and press enter to execute them.
            </p>
            <p>
                Type 'clear' to clear the terminal.
            </p>
            <p>
                Type 'exit' to exit the terminal.
            </p>
			<div className='terminal-container' key={key}>
            <Input onEnter={handleReturnCommand} disable={false} />
            {terminalPairs.map((pair, index) => (
                <div key={index}>
                    {pair.Output}
                    {pair.Input}
                </div>
            ))}
        </div>
		</>
    );
}

export default App;

