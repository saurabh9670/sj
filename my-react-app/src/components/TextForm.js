import React, {useState} from 'react'



export default function TextForm(props) {
    const handelUpclick = ()=> {
        //console.log("uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase .',"success");
    }
    const handelLowclick = ()=> {
        //console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase .","success");
    }
    const handelClearclick = ()=> {
        //console.log("Lowercase was Clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Clear all text .","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listen care fully .","success");
      }
    const handleOnChange = (e)=> {
        console.log("On Change");
        setText(e.target.value);
    }
    const[text, setText] =useState('');

  return (
    <>  
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style=
            {{backgroundcolor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'grey':'#042743'}}rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handelUpclick}>Convert Upper Case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handelLowclick}>Convert Lower Case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handelClearclick}>Clear all Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length}words and {text.length}Characters</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>

  )
}