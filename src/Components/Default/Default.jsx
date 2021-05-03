import React from "react";
import './default.css'
import academic from "../Images/study-after-see.jpeg";
import esewa from "../Images/esewa-logo.png";
import khalti from "../Images/logo1.png";
// import Navbar from "../layouts/Navbar";
// import Footer from "../layouts/Footer";
import Programming from "./ProgrammingCourses/Programming";

const Default = () => {
    return (
        <>
            <div className="languages">
                <h1 className="main-header">
                    LEARN 50+ PROGRAMMING LANGUAGES !
                </h1>
                <Programming/>
            </div>
            <div className="academic-course">
                <h1 className="main-header">
                    LEARN 100+ ACADEMIC SUBJECTS !
                </h1>
                <div>
                    <img src={academic} alt=""/>
                </div>
            </div>
            <div className="payment">
                <h1 className="main-header">
                    OUR SECURE PAYMENT PARTNERS
                </h1>
                <div className="payments-online">
                    <img src={esewa} alt=""/>
                    <img src={khalti} alt=""/>
                </div>
            </div>

        </>
    )
}

export default Default;