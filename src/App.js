import React, { useState } from "react";
import './index.css'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router ,  Route , Routes  } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) => {

    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }

  const [mode,setMode] = useState("light")

  const toggleMode = () =>
{
if(mode === "light"){
  setMode("dark");
  document.body.style.backgroundColor = "black" ;
  document.body.style.color = "white"
  showAlert("Dark mode is enabled", "success")

}else{
  
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black"
  setMode("light")
  showAlert("Light mode is enabled", "success")
  
}
} 
 return (
    <Router>
    
<Navbar title = "TextUtils" sub ="home " Mode={mode} toggle={toggleMode} />
     <Alert  alert={alert}/>
      <Routes>
        <Route path="/" element={<div className="container my-3"> <TextForm showAlert={showAlert}  Mode={mode} heading="Enter The Text To Analyze"/></div>} />
        <Route path='/About' element={<About/>} />
      </Routes>
     
    </Router>
  );
}
export default App;
