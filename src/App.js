import React,{useState} from "react";

import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Register } from './register';

 
function App() {
  const [currentForm,setCurrentForm]=useState('login');
  const toggleForm =(formname)=>{
    setCurrentForm(formname);
  }
  return (
    <div className="App">
      {
        currentForm==="login" ? <Login onFormSwitch={toggleForm}/> :<Register onFormSwitch={toggleForm}/>
      }

      
      
    
    </div>
  );
}

export default App;
