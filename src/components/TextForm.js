import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upper case");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.", "success");
    }
    const handleLowClick = () => {
        console.log("upper case");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.", "success");

    }
    const handleOnChange = (event) => {
        console.log("upper case");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // setText("Setting text");
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'#011a39':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#011a39', color:props.mode==='light'?'#011a39':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'#011a39':'white'}}>
            <h1>Your text summar</h1>
            <p>{text.split(' ').length} words, {text.length} chars</p>
            <p>{0.008 * text.split(' ').length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter in the text box to perview here"}</p>
        </div>
        </>
    );
}
