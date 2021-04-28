import React from "react";
import './default.css'
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Default = () => {
    return (
        <>
            {/*This is Navbar Component*/}
            <Navbar/>

            {/*This is Body Component*/}
            <div className="body">

            </div>

            {/*This is Footer Component*/}
            <Footer/>
        </>
    )
}

export default Default;