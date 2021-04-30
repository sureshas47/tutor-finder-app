import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./signup.css";
import img from "../../Images/loginimg.webp";
import fireAuth from "../Login/FirebaseAuth";
import "firebase/firestore";
import firebase from "firebase";

const SignupForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [userType, setUserType] = useState("");

    //create user for authentication with email and password
    useEffect(() => {
        return () => {
            fireAuth.auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    return response;
                }).catch((error) => {
                return error;
            });
        };
    });

    const handleSignup = (e) => {
        e.preventDefault();
        //send data to firestore
        const firestore = firebase.firestore() //making firestore object
        if (password === cpassword) {
            firestore.collection("tutorFinderApp").add({
                email: email,
                password: password,
                cpassword: cpassword,
                fullName: fullName,
                userType: userType
            }).then(function (response) {
                alert("register successful");
            }).catch(function (error) {
                alert("failed to register ! please try again");
            });
        } else {
            prompt("password didnot matched");
        }
    };

    return (
        <>
            <div className="header">
                <img src={img} alt=""/>
                <h1>Tutor Finder User Registration Area</h1>
            </div>

            <div className="signupArea">
                <form className="signup-area" onSubmit={handleSignup} action="">

                    <input type="email" name="email" id="email" autoComplete="off" value={email}
                           placeholder="enter email" onChange={(e) =>
                        setEmail(e.target.value)} required/>

                    <input type="password" name="password" id="psw" autoComplete="off" value={password}
                           placeholder="enter password"
                           onChange={(e) => setPassword(e.target.value)} required/>

                    <input type="password" name="cPassword" id="cpsw" autoComplete="off" value={cpassword}
                           onChange={(e) => setCpassword(e.target.value)}
                           placeholder="retype password" required/>

                    <input type="text" name="fullname" id="fname" autoComplete="off" value={fullName}
                           onChange={(e) => setFullName(e.target.value)}
                           placeholder="enter Full name" required/>

                    <input type="radio" name="tutor" id="tutor" value="tutor" checked={userType === "tutor"}
                           onChange={(e) => setUserType(e.target.value)}/>I am Tutor
                    <input type="radio" name="student" id="student" value="student" checked={userType === "student"}
                           onChange={(e) => setUserType(e.target.value)}/>I am Student

                    <button name="signup" type="submit">Sign Up My Account</button>

                    <Link to="/">already an account? Login</Link>
                </form>

            </div>
        </>
    )
}
export default SignupForm;