import { useState, useEffect, useRef } from "react";
import Axios from "axios";

function RegisterAdmin() {

    const [usernameAdmin, setUsernameAdmin] = useState('')
    const [passwordAdmin, setPasswordAdmin] = useState('')
    const [loginAdminUsername, setLoginAdminUsername] = useState('')
    const [loginAdminPassword, setLoginAdminPassword] = useState('')

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
            console.log(response)
        })
    }

    return(
        <div className="admin-wrapper">
            <div className="register">
                <h1>Register</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => {setUsernameAdmin(e.target.value)}}></input>
                <label>Password</label>
                <input type="password" onChange={(e) => {setPasswordAdmin(e.target.value)}}></input>
                <button onClick={handleRegister}>Register</button>
            </div>
            <div className="login">
            <h1>Login</h1>
                <label>Username</label>
                <input type="text"  onChange={(e) => {setLoginAdminUsername(e.target.value)}}></input>
                <label>Password</label>
                <input type="text"  onChange={(e) => {setLoginAdminPassword(e.target.value)}}></input>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default RegisterAdmin;