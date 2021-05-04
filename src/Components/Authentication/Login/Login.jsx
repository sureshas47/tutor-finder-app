import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import "./login.css";
// import fireAuth from "./FirebaseAuth";
import img from "../../Images/loginimg.webp";
import "firebase/firestore";
import firebase from "firebase";
import apps from "firebase";
// import SignupForm from "../Signup/Signup";


const LoginForm = () => {

    //usestate and pass value to each inputfields.
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEntry = {email: email, password: password}
        setAllEntry(...allEntry, [newEntry])
        apps.auth().signInWithEmailAndPassword(email, password).then(() => {
            alert("successful login from: " + email);
            window.location = "./Default";
        }).catch((error) => {
            alert("failed", error);
        })

    }

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
                <div>
                    {/*{*/}
                    {/*    allEntry.map((curVal) => {*/}
                    {/*        return (*/}
                    {/*            <div className="show-email">*/}
                    {/*                <p>{curVal.email}</p>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}

                </div>
            </div>
        </>
    )
}

export default LoginForm;



