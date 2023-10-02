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
  const HandleSpace = () => {
    let newText = inputtext.split(/[ ]+/);
    setinputtext(newText.join(" "));
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
  <button onClick={HandleSpace} className="btn">Remove extra spaces</button>
  <button onClick={HandleClear} className="btnr">Clear Text</button>
  </div></center>
 
  <center>
    <center><p className='textCount'>{inputtext.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {inputtext.length} characters</p></center>

    <center><p className='preview'>{inputtext.length>0?"Preview":"Type something to get preview"}</p> </center>
    
 <p className={icon?'inputdD':'inputlL '}  >{inputtext}</p>
  </center>
    </main>
  );
}

export default App;
