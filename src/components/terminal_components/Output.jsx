import React from 'react';
import Commands from './Commands.js';
import './Output.css';

function Output(props) {
    const output = Commands.find((command) => command.command === props.command);
    console.log(output);
    if (props.command === 'help') {
        return (
            <div>
                {Commands.map((command) => (
                    <p className='help-output'>{`<${command.command}>: ${command.description}`}</p>
                ))}
            </div>
        );
    }
    return (
        <div>
            {output ? <p>{output.output}</p> : <p>Command not found</p>}
        </div>
    );
}

export default Output;
