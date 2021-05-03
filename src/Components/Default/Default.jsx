import React from "react";
import './default.css'
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
            <div className="">
                <h1 className="main-header">
                    LEARN 100+ ACADEMIC SUBJECTS !
                </h1>
            </div>

        </>
    )
}

export default Default;