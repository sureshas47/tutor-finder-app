import React, {useState} from "react";
import stdimg from "../../Images/Education.png";
import "./studentProfile.css";
import firebase from "firebase";


const StudentProfile = () => {
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [city, setCity] = useState("")
    const [college, setCollege] = useState("")

    const handleStudentProfile = (e) => {
        e.preventDefault();
        const firestore=firebase.firestore()
        firestore.collection("studentData").add({
            address:address,
            phoneNumber:phoneNumber,
            city:city,
            college:college
        }).then(function (response){
            alert("student register successful");
        }).catch(function (error){
            alert("failed to register student ! please try again");
        });
    };

    return (
        <>
            <div className="main-header">
                <h1>Searching A Teacher !<h2> Register Your Profile</h2></h1>
            </div>

            <div className="header">
                <img src={stdimg} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                    porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                    Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                    porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                    Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non
                    porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore.
                    Aliquam quas, voluptatibus! Register Your Profile To <span>GET STARTED</span></p>
            </div>

            <div className="studentProfile">
                <form action="" className="student-profile" onSubmit={handleStudentProfile}>

                        <input type="text" name="address" id="address" autoComplete="off" value={address}
                               placeholder="enter address" onChange={(e) =>
                            setAddress(e.target.value)} required/>

                        <input type="number" name="phoneNumber" id="phoneNumber" autoComplete="off" value={phoneNumber}
                               placeholder="enter contact no."
                               onChange={(e) => setPhoneNumber(e.target.value)} required/>

                        <input type="text" name="city" id="city" autoComplete="off" value={city}
                               onChange={(e) => setCity(e.target.value)}
                               placeholder="enter city" required/>

                        <input type="text" name="college" id="college" autoComplete="off" value={college}
                               onChange={(e) => setCollege(e.target.value)}
                               placeholder="enter college name" required/>

                        <button name="save" type="submit">Save Profile</button>
                </form>
            </div>
        </>
    )
}
export default StudentProfile;
