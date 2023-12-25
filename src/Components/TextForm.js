import React, { useState } from 'react';



export default function TextForm(props) {
    const handleUpCase=()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoCase=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("OnChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("new text");
  return (
    <> 
    <div className='container'style={{color:props.mode === "dark"? "white":"black"}}>
        <h1>{props.heading} - </h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === "light"? "white":"gray"}} value={text} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>
            convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoCase}>
            convert to lowecase
        </button>
    </div>
    <div className="container my-3" style={{color:props.mode === "dark"? "white":"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} mintues read</p>
    </div>
    </>
  )
}
