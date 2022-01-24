import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("")
    const handleUpperClick = () => {
        console.log("Uppercase triggered")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", "success")
    }

    const handleLowerClick = () => {
        console.log("Lowercase Triggered")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To LowerCase", "success")
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared The Screen", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("text");
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied To Clipboard", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }

    const change = (event) => {
        console.log("onChange Triggered")
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">
            <h1>{props.heading}</h1>

                <div className="mb-3 my-3 container" >
                    <textarea className="form-control my-3" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} value={text} id="text" rows="8" onChange={change}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>

                <div className="container my-3">
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes taken to read </p>
                </div>
                <div className="conatiner preview my-2">
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter Something In The textbox Above To Show In Preview"}</p>
                </div>
            </div>
        </>
    )
}
