import React from "react";
import {useState} from "react";
import timg from "../../Images/teacher.jpeg";

const TeacherProfile = () => {
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [city, setCity] = useState("")
    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState("");
    const [fees, setFees] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleTeacherProfile=()=>{
        
    }
    return (
        <>
            <>
                <div className="header">
                    <img src={timg} alt=""/>
                    <h2>Student Profile</h2>
                </div>
                <br/><br/><br/>
                <div className="studentProfile">
                    <form action="" onSubmit={handleTeacherProfile}>

                        <div className="address">
                            <input type="text" name="address" id="address" autoComplete="off" value={address}
                                   placeholder="enter address" onChange={(e) =>
                                setAddress(e.target.value)} required/>
                        </div>
                        <div className="phoneNumber">
                            <input type="number" name="phoneNumber" id="phoneNumber" autoComplete="off" value={phoneNumber}
                                   placeholder="enter contact no."
                                   onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>

                        <div className="City">
                            <input type="text" name="city" id="city" autoComplete="off" value={city}
                                   onChange={(e) => setCity(e.target.value)}
                                   placeholder="enter city" required/>
                        </div>
                        <div className="qualification">
                            <input type="text" name="qualification" id="qualification" autoComplete="off" value={qualification}
                                   onChange={(e) => setQualification(e.target.value)}
                                   placeholder="enter qualification" required/>
                        </div>

                        <div className="experience">
                            <input type="text" name="experience" id="experience" autoComplete="off" value={experience}
                                   onChange={(e) => setExperience(e.target.value)}
                                   placeholder="enter experience" required/>
                        </div>
                        <div className="fees">
                            <input type="number" name="fees" id="fees" autoComplete="off" value={fees}
                                   onChange={(e) => setFees(e.target.value)}
                                   placeholder="enter fees" required/>
                        </div>
                        <div className="subject">
                            <input type="text" name="subject" id="subject" autoComplete="off" value={subject}
                                   onChange={(e) => setSubject(e.target.value)}
                                   placeholder="enter subject" required/>
                        </div>
                        <div className="message">
                            <input type="text" name="message" id="message" autoComplete="off" value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                   placeholder="enter message" required/>
                        </div>

                        <div className="save-profile">
                            <button name="save" type="submit">Save Profile</button>
                        </div>
                    </form>
                </div>
            </>
        </>
    )
}
export default TeacherProfile;