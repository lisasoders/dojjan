import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import CreateProducts from "./createProducts";

function RegisterAdmin() {

    const [usernameAdmin, setUsernameAdmin] = useState('')
    const [passwordAdmin, setPasswordAdmin] = useState('')
    const [loginAdminUsername, setLoginAdminUsername] = useState('')
    const [loginAdminPassword, setLoginAdminPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [statusLoggedIn, setStatusLoggedIn] = useState("");

    const handleRegister = (e) => {
        Axios.post('http://localhost:3001/admin/register', {
            username: usernameAdmin, 
            password: passwordAdmin,
        }).then(() => {
            alert("successfull")
        })
    }

    const handleLogin = (e) => {
        Axios.post('http://localhost:3001/admin/login', {
            username: loginAdminUsername, 
            password: loginAdminPassword,
        }).then((response) => {
            if (response.data.message){
                setStatusLoggedIn(response.data.message)
            } else {
                setLoggedIn(response.data[0].username)
            }
        })
    }

    return(
        <div className="admin-wrapper">
            {
                loggedIn ? <CreateProducts /> :  
            <div> 
                <div className="register">
                    <h1>Register</h1>
                    <label>Username</label>
                    <input type="text" onChange={(e) => {setUsernameAdmin(e.target.value)}}></input>
                    <label>Password</label>
                    <input type="password" onChange={(e) => {setPasswordAdmin(e.target.value)}}></input>
                    <button onClick={(e) => {handleRegister(e); }}>Register</button>
                </div>
                <div className="login">
                <h1>Login</h1>
                    <label>Username</label>
                    <input type="text"  onChange={(e) => {setLoginAdminUsername(e.target.value)}}></input>
                    <label>Password</label>
                    <input type="password"  onChange={(e) => {setLoginAdminPassword(e.target.value)}}></input>
                    <button onClick={() => {handleLogin()}}>Login</button>
                </div>
                <p>{statusLoggedIn}</p>
            </div>
            }
        </div>
    )
}

export default RegisterAdmin;