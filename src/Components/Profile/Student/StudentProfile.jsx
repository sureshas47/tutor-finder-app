import React, {useState} from "react";
import stdimg from "../../Images/Education.png";
import "./studentProfile.css";


const StudentProfile = () => {
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [city, setCity] = useState("")
    const [college, setCollege] = useState("")

    const handleStudentProfile = () => {

    }


    return (
        <>
            <div className="header">
                   <img src={stdimg} alt=""/>
                     <h2>Student Profile</h2>
            </div>
            <br/><br/><br/>
            <div className="studentProfile">
            <form action="" onSubmit={handleStudentProfile}>
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
                <div className="college">
                    <input type="text" name="college" id="college" autoComplete="off" value={college}
                           onChange={(e) => setCollege(e.target.value)}
                           placeholder="enter college name" required/>
                </div>

                <div className="save-profile">
                    <button name="save" type="submit">Save Profile</button>
                </div>
            </form>
            </div>
        </>
    )
}
export default StudentProfile;
