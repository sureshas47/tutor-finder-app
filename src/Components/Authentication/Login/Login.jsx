import React, {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./login.css";
import img from "../../Images/loginimg.webp";
import app from "../Login/FirebaseAuth";
import {registerUserChat} from "../UserManagment";


const LoginForm = () => {
    //usestate and pass value to each inputfields.
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])
    const history=useHistory();

    const register=(userInfo)=>{
        registerUserChat(userInfo).then(function (res){
            history.push("/chat-app");
        })
    }
    //login
    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {email: email, password: password}
        setAllEntry(...allEntry, [newEntry])
        app.auth().signInWithEmailAndPassword(email, password).then((res) => {
            alert("successful login from: " + email);
            // console.log(res);
            //storing user's email and uid after login
            register(res.user);
        }).catch((error) => {
            alert("failed", error);
        })

    };

    return (
        <>
            <div className="header">
                <img src={img} alt=""/>
                <h1>Tutor Finder Login Area</h1>
            </div>

            <div className="loginArea">
                <form className="login-area" onSubmit={handleSubmit} action="">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" autoComplete="off"
                               value={email} required
                               onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="psw" autoComplete="off"
                               value={password} required
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <button name="submit" type="submit" className="submit">Login</button>
                        <Link to="signup">Signup</Link>

                </form>

            </div>
        </>
    )
}

export default LoginForm;



