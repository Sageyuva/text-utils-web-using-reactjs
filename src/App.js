import React, { useState } from 'react';
import {Sun ,Moon} from "lucide-react"

import "./Style.css"
function App() {

  const [inputtext, setinputtext] = useState("")
  const [icon, seticon] = useState(true)


  const handleIcon = () => {
    seticon(!icon)
  }

  const OnText = (e) => {
    setinputtext(e.target.value)
  }

  const HandleUp = () => {
    setinputtext(inputtext.toUpperCase())
  }
  const HandleLow = () => {
    setinputtext(inputtext.toLowerCase())
  }
  const HandleCapi = () => {
    let newText = inputtext.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setinputtext(newText);
  }
  const HandleClear = () => {
    setinputtext("")
  }
  const HandleCopy = () => {
    navigator.clipboard.writeText(inputtext)
    alert("Text Copied")
  }


  return (
    <main className={icon?"main":"main2"}>
      <div className='NavBar'>
        <p>TextUtils</p> 
        <button onClick={handleIcon} className={icon?"btnl":"btnd"}>{icon?<Sun/>:<Moon/>} {icon?"Light":"Dark"} Mode</button>
      </div>
      <center>
<textarea value={inputtext} onChange={OnText} className={icon?'inputd':'inputl'} />
</center>
<center><div className='buttonsdiv'>
  <button onClick={HandleUp} className="btn">Upper Case</button>
  <button onClick={HandleLow} className="btn">Lower Case</button>
  <button onClick={HandleCapi} className="btn">Capitalize Words</button>
  <button onClick={HandleCopy} className="btn">Copy Text</button>
  <button onClick={HandleClear} className="btnr">Clear Text</button>
  </div></center>
  <center><p className='preview'>Preview</p> </center>
  <center>
    <center><p className='textCount'>{inputtext.split(" ").length} Words and {inputtext.length} characters in the text </p></center>
    
 <p className={icon?'inputdD':'inputlL '}  >{inputtext}</p>
  </center>
    </main>
  );
}

export default App;
