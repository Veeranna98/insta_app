import React, { useState } from "react";
import Signup from "./Components/Signup"
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import {Routes,Route} from "react-router-dom"

function App(){
    
return(
    <div className="App">
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
   </div>
    )

}

export default App;