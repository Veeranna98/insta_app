import React,{useState,useContext} from "react";
import axios from "axios"; 
import UserContext from "../Context/UserContext";

const Login=()=>{
    const[user,setUser]=useState({email:"",password:""})
    const[message,setMessage]=useState("")
    const {setToken}=useContext(UserContext);

    function updateUser(e){
        let key=e.target.name
        setUser({...user,[key]:e.target.value})
    }

    //validations

    async function implementLogin(e){
        e.preventDefault();

        if(!user.email||!user.password){
            setMessage("Please fill all the details")
            return;

        }

        //login Api:https://instagram-express-app.vercel.app/api/auth/login
        try{
             const response=await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{

             email:user.email,
             password:user.password,
            })
            console.log("success",response.data.message)
            console.log("status",response.status)
            setMessage(response.data.message)
            console.log("token",response.data.data.token)
            setToken(response.data.data.token)
            setUser({email:"",password:""})
}
    catch(error){
            console.log("Error",error.response.data.message)
            console.log("status",error.response.status)
            setMessage(error.response.data.message)
        }
}
    return(
        <div>
            <h1>Login</h1>
            {
                message && <h2>{message}</h2>
            }
            <form onSubmit={implementLogin}>
                <input type="text" placeholder="Email" name="email"
                onChange={updateUser}
                value={user.email}
                /><br></br><br></br>
                <input type="password" placeholder="Password" name="password"
                onChange={updateUser}
                value={user.password}
                /><br></br><br></br>
                {/* <button type="submit">Submit</button> */}

                <button
          type="button"
          onClick={() => {
            window.location.href = "/Dashboard";
          }}
        >
          Submit
        </button>
            </form>
        </div>
    )
}

export default Login;
