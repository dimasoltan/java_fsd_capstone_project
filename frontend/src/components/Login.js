import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    //let url ="http://localhost:9090/login/signin";
    let url ="http://localhost:9090/login/signin";
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeofuser,setTypeofUser]=useState("");
let [error,setError]=useState("");
let navigate  = useNavigate();
let handleSubmit=(event)=> {
    event.preventDefault();
    if(emailid.length==0 || password.length==0 || typeofuser.length==0){
        setError("Please write emailid id or password or select type of user")
    }else {
        let login = {emailid,password,typeofuser}
    axios.post(url,login).then(result=>{
        if(result.data=="user login successfully"){
            sessionStorage.setItem("user",emailid);
              navigate("/customer")
        }else if(result.data=="Admin login successfully"){
            navigate("/admin")
        }else {
                setError(result.data);
        }
    }).catch(error=>console.log(error));
    }
    setEmailId("");
    setPassword("");
}
    return(
        <div>
            <span style={{"color":"red"}}>{error}</span>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
                <input type="emailid" name="emailid" onChange={(event)=>setEmailId(event.target.value)}
                value={emailid}
                /><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}
                value={password}/><br/>
                <label>TypeOfUser</label>
                <input type="radio" name="typeofuser" value="admin" onChange={(event)=>setTypeofUser(event.target.value)}/>Admin
                <input type="radio" name="typeofuser" value="user" onChange={(event)=>setTypeofUser(event.target.value)}/>Customer<br/>
                <input type="submit" value="SignIn"/>
                <input type="reset" value="reset"/>
            </form>
            <br/>
            <a onClick={()=>navigate("/signup")}>SignUp</a>
        </div>
    )
}

export default Login;