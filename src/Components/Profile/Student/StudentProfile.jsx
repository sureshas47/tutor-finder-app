import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import stdimg from "../../Images/Education.png";
import "./studentProfile.css";
import firebase from "firebase";
import Bounce from "react-reveal/Bounce";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField} from "@material-ui/core";
import {getData} from "../DataManagement";



const StudentProfile = () => {
    const history = useHistory();
    const [searchItem, setSearchItem] = useState();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);



    // const [address, setAddress] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [city, setCity] = useState("")
    // const [college, setCollege] = useState("")

    const handleStudentProfile = (e) => {
        // e.preventDefault();
        // const firestore = firebase.firestore()
        // firestore.collection("studentData").add({
        //     address: address,
        //     phoneNumber: phoneNumber,
        //     city: city,
        //     college: college
        // }).then(function (response) {
        //     alert("student register successful");
        //     history.push("/chat");
        // }).catch(function (error) {
        //     alert("failed to register student ! please try again");
        // });


    };

    const handleChange = (e) => {
        if (e.target.name == "search") {
            setSearchItem(e.target.value);
        }
    }
    const searchCourse = () => {

    }
//getting data at first render
    useEffect(() => {
        getData().then(function (res) {
            setData(res);
            setIsLoading(false);
        }).catch(function (error){
        })
    }, [true]);



    return (
        <>
            <div className="main-header">
                <Bounce top>
                    <h1>Searching A Teacher ?
                    </h1>
                </Bounce>
            </div>

            <div className="header">
                <Bounce left>
                    <img src={stdimg} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                        porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                        Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                        porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                        Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                        porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                        Aliquam quas, voluptatibus! Register Your Profile To <span>GET STARTED</span></p>
                </Bounce>
            </div>

            <div className="search-bar">
                <Bounce left>
                    <TextField id="standard-basic" label="Search Courses" name="search" value={searchItem}
                               onChange={handleChange}/>
                    <Button className="btnSearch" variant="contained" color="primary"
                            onClick={searchCourse}>Search
                    </Button>
                </Bounce>
            </div>

            {/*showing data to students*/}
            <div className="card">
                {isLoading ? <p className="main-header">loading courses...</p> :

                    <List>
                        {data.map((item) =>
                            <ListItem className="listItem"
                                      // onClick={() => history.push("/default")}
                            >
                                <ListItemAvatar>
                                    <Avatar src={item.photoUrl}>
                                        T
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className="item" primary={item.subject}
                                              secondary={
                                                  <>
                                                  <div>{"Rs. "+item.fees+", Exp: "+item.experience+" - yrs."}</div>
                                                  <div>{"Contact: "+item.phoneNumber}</div>
                                                  <div>{"Address: "+item.address}</div>
                                                  <div>{"City: "+item.city+""}</div>
                                                  <div>{"Qualifications: "+item.qualification}</div>
                                                  </>
                                              }
                                >
                                </ListItemText>

                                <Button id="btn-start-chat" onClick={()=>history.push("/chat-app")}>
                                    Start Chat
                                </Button>
                            </ListItem>
                        )}
                    </List>
                }
            </div>


            {/*<form action="" className="student-profile" onSubmit={handleStudentProfile}>*/}
            {/*    <Bounce>*/}
            {/*    <input type="text" name="address" id="address" autoComplete="off" value={address}*/}
            {/*           placeholder="enter address" onChange={(e) =>*/}
            {/*        setAddress(e.target.value)} required/>*/}

            {/*    <input type="number" name="phoneNumber" id="phoneNumber" autoComplete="off" value={phoneNumber}*/}
            {/*           placeholder="enter contact no."*/}
            {/*           onChange={(e) => setPhoneNumber(e.target.value)} required/>*/}

            {/*    <input type="text" name="city" id="city" autoComplete="off" value={city}*/}
            {/*           onChange={(e) => setCity(e.target.value)}*/}
            {/*           placeholder="enter city" required/>*/}

            {/*    <input type="text" name="college" id="college" autoComplete="off" value={college}*/}
            {/*           onChange={(e) => setCollege(e.target.value)}*/}
            {/*           placeholder="enter college name" required/>*/}

            {/*    <button name="save" type="submit">Save Profile</button>*/}
            {/*    </Bounce>*/}
            {/*</form>*/}

        </>
    )
}
export default StudentProfile;
