import React, { useState, useEffect, useRef } from 'react';
import './Input.css';

const Input = (props) => {
    const [input, setInput] = useState('');
    const [disable, setDisable] = useState(props.disable);
    const virtualPath = 'C:\\Chrome';
    const inputRef = useRef(null);
    const caretRef = useRef(null);

    function handleChange(event) {
        const value = event.target.value;
        setInput(value);
    }

    useEffect(() => {
        const inputElement = inputRef.current;
        const caretElement = caretRef.current;

        const charWidth = parseInt(getComputedStyle(inputElement).fontSize, 10) * 0.6;
        const maxCaretLeft = inputElement.offsetWidth - charWidth;

        let caretLeft = charWidth * input.length;
        if (caretLeft > maxCaretLeft) {
            caretLeft = maxCaretLeft;
        }

        caretElement.style.left = `${caretLeft}px`;
    }, [input]);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function handleEnter(event) {
        if (event.keyCode === 13) {
            props.onEnter(input);
            setDisable(true);
        }
    }

    return (
        <div className="terminal-input-container">
            <p className="path-variable">{virtualPath + '>'}</p>
            <div className="input-wrapper">
                <input
                    type="text"
                    className="terminal-input"
                    value={input}
                    onChange={handleChange}
                    disabled={disable ? true : false}
                    ref={inputRef}
                    onKeyDown={handleEnter}
                />
                <div className="custom-caret" ref={caretRef} style={{display: !disable ? 'block' : 'none'}}></div>
            </div>
        </div>
    );
};

export default Input;
