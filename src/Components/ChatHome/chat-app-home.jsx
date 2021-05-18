import {React, Component, useState, useEffect} from "react";
import {Card, Button, CardHeader, Avatar} from "@material-ui/core";
import "./chat-app-home.css";
import {Link, useHistory} from "react-router-dom";
import img from "../Images/Present with ease.png"
import app from "../Authentication/Login/FirebaseAuth";
import UserChatList from "./userChatList";


export default function ChatAppHome() {
    const [user,setUser]=useState();
    const [gettingUser,setGettingUser]=useState(false);
    const [isLogin,setIsLogin]=useState(false);

    useEffect(() => {

        //checking users
        app.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if(user) {
                let user_obj = [];
                user_obj.id = user.uid;
                user_obj.email = user.email;
                setUser(user_obj);
                setIsLogin(true);
            }
            setGettingUser(false);
        });
    }, [true]);

    const logOut=(e)=>{
        e.preventDefault();
       app.auth().signOut().then(function (res){
           history.push("/login")
       }).catch(function (error){
           console.log(error+"error while logging in")
       })
    };

    const history=useHistory();

    return(
        <>
            <div className="main-header">
                {gettingUser ?
                <p>please wait...</p>:
                <Card className="card">
                    <h1>CONNECT WITH PRO</h1>
                    <p>Lets share your thoughts with our professionals.</p>
                    <img src={img} alt=""/>
                    {isLogin ?
                        <p >
                        <CardHeader className="main-header"
                            avatar={
                                <Avatar aria-label="" >
                                    user
                                </Avatar>
                            }
                            title="Hello,"
                            subheader={user.email}
                        />
                            <Button id="logout" className="btnLogout" onClick={logOut}  >
                                Logout
                            </Button>
                        </p>:

                   <div className="buttons">
                       <Button color="secondary" onClick={()=>history.push("signup")}>
                           Register</Button>
                       <Button className="btn-login" color="primary" onClick={()=>history.push("/login")}>
                           Login</Button>
                   </div>

                    }
                </Card>
                }
                {isLogin ?
                    <div>
                        <UserChatList uid={user.id}/>
                    </div>:""
                }

            </div>
        </>
    )
}


