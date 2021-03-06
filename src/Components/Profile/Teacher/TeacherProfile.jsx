import React, {useEffect} from "react";
import {useState} from "react";
import timg from "../../Images/teacher.jpeg";
import "./teacherProfile.css";
import firebase from "firebase";
import app from "firebase";
import Slide from "react-reveal/Slide";

const TeacherProfile = () => {
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [city, setCity] = useState("")
    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState("");
    const [fees, setFees] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [photoUrl, setPhotoUrl] = useState();
    // const [file, setFile] = useState(null);


    const handleTeacherProfile = e => {
        e.preventDefault();
        const firestore = firebase.firestore()
        firestore.collection("teacherData").add({
            address: address,
            phoneNumber: phoneNumber,
            city: city,
            qualification: qualification,
            experience: experience,
            fees: fees,
            subject: subject,
            message: message,
            photoUrl: photoUrl
        }).then(function (response) {
            alert("teacher register successful");
        }).catch(function (error) {
            alert("failed to register ! please try again");
        });
        //uploading image to firebase
        // const storageRef = app.storage().ref("images");
        // const fileRef = storageRef.child(file.name).put(file);
        // fileRef.put(file);
    };

    return (
        <>
            <div style={{background:"linear-gradient(to bottom, #33ccff 0%, #ffffff 100%)"}}>
            <div className="main-header">
                <Slide top>
                    <h1>Searching A New <h2>Teaching Job !</h2></h1>
                </Slide>
            </div>

            <div className="t-header">
                <Slide left>
                    <img src={timg} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda cupiditate
                        delectus
                        dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque
                        labore
                        odit quos unde?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda
                        cupiditate delectus
                        dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque
                        labore
                        odit quos unde?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda
                        cupiditate delectus
                        dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque
                        labore
                        odit quos unde? Register your profile to<span> GET STARTED</span></p>
                </Slide>
            </div>

            <div className="teacherProfile">
                <form className="teacher-Profile" action="" onSubmit={handleTeacherProfile}>
                    <Slide left>


                        <input type="text" name="address" id="address" autoComplete="off" value={address}
                               placeholder="enter address" onChange={(e) =>
                            setAddress(e.target.value)} required/>

                        <input type="number" name="phoneNumber" id="phoneNumber" autoComplete="off" value={phoneNumber}
                               placeholder="enter contact no."
                               onChange={(e) => setPhoneNumber(e.target.value)} required/>

                        <input type="text" name="city" id="city" autoComplete="off" value={city}
                               onChange={(e) => setCity(e.target.value)}
                               placeholder="enter city" required/>

                        <input type="text" name="qualification" id="qualification" autoComplete="off"
                               value={qualification}
                               onChange={(e) => setQualification(e.target.value)}
                               placeholder="enter qualification" required/>

                        <input type="text" name="experience" id="experience" autoComplete="off" value={experience}
                               onChange={(e) => setExperience(e.target.value)}
                               placeholder="enter experience" required/>

                        <input type="number" name="fees" id="fees" autoComplete="off" value={fees}
                               onChange={(e) => setFees(e.target.value)}
                               placeholder="enter fees" required/>

                        <input type="text" name="subject" id="subject" autoComplete="off" value={subject}
                               onChange={(e) => setSubject(e.target.value)}
                               placeholder="enter subject" required/>

                        {/*<input type="text" name="message" id="message" autoComplete="off" value={message}*/}
                        {/*       onChange={(e) => setMessage(e.target.value)}*/}
                        {/*       placeholder="enter message" required/>*/}

                        <input type="text" name="photoUrl" id="photoUrl" autoComplete="off" value={photoUrl}
                               onChange={(e) => setPhotoUrl(e.target.value)}
                               placeholder="enter course link" required/>
                        <textarea placeholder="enter message" style={{marginBottom:"10px"}} name="message" id="message" cols="30" rows="5" required autoComplete="off"
                                  value={message} onChange={(e)=>setMessage(e.target.value)}>
                            </textarea>

                        {/*<input className="file" type="file" name="profile-pic" id="profile-pic" autoComplete="off"*/}
                        {/*       onChange={(e) => setFile(e.target.files[0])}*/}
                        {/*       placeholder="choose profile picture" required/>*/}

                        <button name="save" type="submit">Save Profile</button>
                    </Slide>
                </form>
            </div>
            </div>
        </>
    )
}
export default TeacherProfile;