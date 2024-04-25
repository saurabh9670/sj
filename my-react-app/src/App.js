import './App.css';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import AlertA from './components/AlertA';

//  import {
//    BrowserRouter as Router,
//    Route,
//    Routes
// } from "react-router-dom";



function App() {

    const [mode,setMode] = useState('light');//whether dark mode is enabled or not
    const [alert,setAlert] = useState(null);

    const showAlert =(message , type)=>{
        setAlert({
          msg: message,
          type: type
        })
          setTimeout(()=>{
              setAlert(null);
          },1500);

      }
      /*setInterval(()=>{
        document.title="install Modifiers";
      }, 1000);                                 //this is for blink a message for attract the user
      setInterval(()=>{
        document.title="Text Modifiers";
      }, 3000);
      */
    const toggleMode = () => {
        if (mode === 'light') {
            setMode ('dark');
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark Mode has been enabled","success");
            document.title= "Text-Modifier-Dark Mode";
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = "white";
          showAlert("light Mode has been enabled","success");
          document.title= "Text-Modifier-Light Mode";
        }
      }  
      return (
      <>
      {/* <Router>
      <Navbar title="Text Modifier" aboutTextarea="About" mode = {mode} toggleMode={toggleMode}/>
      <AlertA alert={alert}/>
          <div className="container" >
            <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/> }/>
            </Routes> 
          </div>

        </Router>  */}
        <Navbar title="Text Modifier" aboutTextarea="About" mode = {mode} toggleMode={toggleMode}/>
        <AlertA alert={alert}/>
          <div className="container" >
          
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>
          <About/>
          </div> 
        </>
      );


}

export default App;
