import React, {useEffect, useState} from "react";
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, TextField, CircularProgress
} from "@material-ui/core";
import "./chat-app-home.css";
import {useHistory} from "react-router-dom";

import app from "../Authentication/Login/FirebaseAuth";
import {createChatRoom, getChatRoomList} from "../Authentication/UserManagment";


export default function UserChatList(props) {

    // const [userList, setUserList] = useState();
    const [chatRoomList, setChatRoomList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [creatingRoom, setCreatingRoom] = useState(false);
    const [roomName, setRoomName] = useState();
    const [roomDesc, setRoomDesc] = useState();
    const [roomImage, setRoomImage] = useState();

    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if(e.target.id==='room_name') setRoomName(e.target.value);
        else if(e.target.id==='room_desc') setRoomDesc(e.target.value);
        else setRoomImage(e.target.value);

    }
    //creating chat room #2
    const createRoom=()=>{
        setCreatingRoom(true)
        let room={};
        room.id=props.uid+'_'+new Date().getTime();
        room.name=roomName;
        room.desc=roomDesc;
        room.image=roomImage;
        // console.log(room);
        createChatRoom(room)
            .then(function (){
                setCreatingRoom(false)
                setOpen(false);
                // history.push('/chat/'+room.id);
            }).catch(function (error){
               // .........................................................TODO
        });
    }

    const getUserList = async () => {
        const snapshot = await app.firestore().collection('userManagement').get();
        return snapshot.docs.map(doc => doc.data());
    }

    useEffect(() => {
        getChatRoomList().then(function (res) {
            setChatRoomList(res);
            setIsLoading(false);
        })

    }, [true]);


    return (
        <div>
            {isLoading ?
                <p>please wait, getting online users...</p> :

                <Card className="card">
                    <Button style={{float: "right", width: "20%"}} onClick={() => setOpen(true)}>
                        Create Chat Room
                    </Button>
                    <h3 className="chat-list">Available Chats</h3>
                    <h2>
                        <List>
                            {chatRoomList.map((item) =>
                                <ListItem className="listItem" onClick={() => history.push("/chat/"+'_'+item.chat_id,{room:item})}>
                                    <ListItemAvatar>
                                        <Avatar src={item.chat_image}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.chat_name} secondary={item.desc}>
                                    </ListItemText>
                                </ListItem>
                            )}
                        </List>
                    </h2>
                </Card>
            }
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Creating Room</DialogTitle>
                {creatingRoom ?<CircularProgress/>:
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        onChange={handleChange}
                        margin="dense"
                        id="room_name"
                        label="Chat Room Name"
                        type="text"
                        fullWidth
                        value={roomName}
                    /><TextField
                        autoFocus
                        onChange={handleChange}
                        margin="dense"
                        id="room_desc"
                        label="Room Description"
                        type="text"
                        value={roomDesc}
                        fullWidth
                /><TextField
                        autoFocus
                        onChange={handleChange}
                        margin="dense"
                        id="image"
                        label="Room Image Link"
                        type="text"
                        value={roomImage}
                        fullWidth
                />
                </DialogContent>}
                {creatingRoom ?'':
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={createRoom} color="primary">
                        Create
                    </Button>
                </DialogActions>}
            </Dialog>
        </div>
    )
}