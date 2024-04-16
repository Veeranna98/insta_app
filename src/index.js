import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider";


ReactDOM.render(
<UserProvider>   
   <BrowserRouter>
        <App/>
   </BrowserRouter>
</UserProvider>  
,document.getElementById("root"))