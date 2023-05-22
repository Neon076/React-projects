import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper-Case","Success")
  };
  const handleLoclick = () => {
    // console.log("upper case was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower-Case","Success")
  };
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  };
  const handleClearlick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","Success")
  };
  const handleCopyClick = () => {
    var t = document.getElementById('myBox');
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Text is Copied","Success")
    // setText(newText);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container my-4' style={{color : props.mode ==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            id='myBox'
            rows='10'
            placeholder='Enter text here'
            onChange={handleOnChange}
            style={{background : props.mode ==='light'?'white':'darkgrey'}}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleupclick}>
          Convert to UpperCase
        </button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLoclick}>
          Convert to LowerCase
        </button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleClearlick}>
          Clear Text
        </button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode ==='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>Time to Read : {0.008*text.split(" ").length} Words per Minute</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the above textbox to preview"}</p>
      </div>
    </>
  );
}
