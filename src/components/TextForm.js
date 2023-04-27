import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  
  
const[text,setText] = useState("");


const HandleLoClick = () => {
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Changed all characters to lower case","success");

}

const HandleUpClick = () => {
   let newText= text.toUpperCase();
  setText(newText)
;

props.showAlert("Changed all characters to upper case","success");
    
}
const HandleOnChange = (event) => {
  console.log("onchangerunning")
  setText(event.target.value)
}

const handleExtra = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  
props.showAlert("Extra spaces from the text is removed","success");
}

const HandleClear = () => {
  setText("")
  
props.showAlert("Cleared the text box","danger");
}
const handleCopy =() =>{
  var text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.values)

}
const handleCapitalize = () => { 
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
   setText(newText);
   
props.showAlert("First character of every word is capitalized","success");
   }

   
return (
<>
<div className='container'>
      <h1>{props.heading}</h1>
       <div className='mb-3'>
        <textarea className="form-control"  value={text} onChange={HandleOnChange}   style={{backgroundColor: props.Mode==='dark'?'grey':'white' , color:props.Mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
       </div>
       <div className="container">
       <button className='btn btn-primary mx-2' onClick= {HandleUpClick}> Convert To Uppercase</button>
       <button className='btn btn-primary mx-2' onClick= {HandleLoClick}> Convert To Lower Case</button>
       <button className='btn btn-primary mx-2' onClick= {handleCapitalize}> Capitalize Words</button>
       <button className='btn btn-primary mx-2' onClick= {handleCopy}> Copy text</button>
       <button className='btn btn-primary mx-2' onClick= {handleExtra}> Extra space</button>

      <button className='btn btn-danger mx-2' onClick= {HandleClear}> Clear text</button>

      </div>
       
       
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length}  words and {text.length} characters  </p>
      
      <p> {0.008 * text.split(" ").length } Minutes required to read the the complete text  </p>
      <h3>Preview of THE TEXT</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes =
{
  heading : PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  heading:"Enter Something",
}