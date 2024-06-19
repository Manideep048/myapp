import React, {useState} from 'react'

export default function TextForm(props) {


  const handleUpClick = () =>{

    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleBelowClick = () =>{

    // console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{

    // console.log("On Change");
    setText(event.target.value);

  }

  const [text, setText] = useState("Enter Text here");

  return (
    <>
    <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleBelowClick}>Convert to LowerCase</button>
    </div>

    <div className="container my-2">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview Text</h3>
      <p>{text}</p>
    </div>

    </>
  )
}
