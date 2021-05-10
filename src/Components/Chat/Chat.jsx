import React, {useEffect, useState} from "react";
import app from "../Authentication/Login/FirebaseAuth";
import {Avatar, Card, CardHeader, CircularProgress} from "@material-ui/core";
import {useParams,useHistory} from "react-router-dom";


import './chat.css';


export default function Chat() {


    const [user, setUser] = useState();
    const [gettingUser, setGettingUser] = useState(true);
    const [msg, setMsg] = useState('');
    const [storeMsg, setStoreMsg] = useState([]);
    const [roomInfo, setRoomInfo] = useState();

    let params =useParams();
    let history=useHistory();

    //getting current user info and set to the setUser
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            let user_obj = [];
            user_obj.id = user.uid;
            user_obj.email = user.email;
            setUser(user_obj);
            setGettingUser(false);
        });
        getMsg();
        setRoomInfo(history.location.state.room);
    }, [true]);

    const handleChange = (e) => {
        if (e.target.value != null) {
            setMsg(e.target.value);
        }
    }

    const onWriteMsg = async () => {
        try {
            //putting every chat a unique chatId using params #1
            await app.database().ref(params.chatId).push({
                content: msg,
                timeStamp: Date.now(),
                uid: user.id,
                email:user.email,
            });

        } catch (error) {
            console.log(error);
        }
    };

    const onSendMsg = (e) => {
        e.preventDefault();
        onWriteMsg().finally(function (res) {
            return res;
        }).catch(function (error){
            console.log(error);

        })
        setMsg([]);
    };

    function getMsg() {
        try {
            // #1
            app.database().ref(params.chatId).on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                setStoreMsg(chats);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                {gettingUser ? <CircularProgress/>:
                    <>
                    <div>
                        <Card>
                            <CardHeader className=""
                                        avatar={
                                            <Avatar aria-label="recipe" src={roomInfo.chat_image}>
                                            </Avatar>
                                        }
                                        title={roomInfo.chat_name}
                                        subheader={roomInfo.desc}
                            />
                        </Card>
                    </div>
                    <div>
                        <Card className="card">
                            <div>
                                <h1>welcome <span>{user.email}</span></h1>
                                <div  >
                                    {storeMsg.length ?
                                        storeMsg.map((item) =>
                                            <div>
                                                <p className={item.uid==user.id ?"my-msg-time":"others-msg-time"}>{item.email}</p>
                                                <p className={item.uid==user.id ?"my-msg":"others-msg"}>{item.content}</p>
                                                <p className={item.uid==user.id ?"my-msg-time":"others-msg-time"}>
                                                    {new Date(item.timeStamp).toDateString()}</p>
                                            </div>
                                        ) : ''
                                    }
                                </div>
                            </div>
                            <form action="" onSubmit={onSendMsg}>
                            <textarea
                                name="" id="msg" cols="20" rows="3"
                                value={msg}
                                onChange={handleChange}
                                placeholder="send message"
                            >
                            </textarea>
                                <div>
                                    <button type="submit">Send
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </div>
                    </>

                }
            </div>
        </>
    )
}