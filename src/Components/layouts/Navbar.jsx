import React from "react";
import "./navbar.css"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';





import {Link} from "react-router-dom";

const Navmenu = () => {

   //  const onNavbar=()=>{
   //         const nav = document.getElementById("navbarSupportedContent");
   //         if (nav.className === "collapse navbar-collapse") {
   //             nav.className += " responsive";
   //         } else {
   //             nav.id = "collapse navbar-collapse";
   //         }
   // }

    return (
        <div style={{width:"100%"}}>
            {/*<nav className="navbar navbar-expand-lg navbar-light bg-primary" >*/}
            {/*    <Link className="navbar-brand" to="/default">Tutor Finder App</Link>*/}
            {/*    <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
            {/*            aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*        <span className="navbar-toggler-icon"></span>*/}
            {/*    </button>*/}
            {/*    <Navbar.Collapse id="basic-navbar-nav">*/}

            {/*    <div className="collapse navbar-collapse" id="navbarSupportedContent" >*/}
            {/*        <ul className="navbar-nav mr-auto">*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link  className="nav-link" to="/default">Home <span className="sr-only">(current)</span></Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className="nav-link" to="student-profile">Find Tutors<span className="sr-only">(current)</span></Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className="nav-link" to="teacher-profile">Find Tutors Jobs <span className="sr-only">(current)</span></Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item dropdown" id='user'>*/}
            {/*                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
            {/*                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*                    User*/}
            {/*                </a>*/}
            {/*                <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
            {/*                    <a className="dropdown-item" href="#">Profile</a>*/}
            {/*                    <div className="dropdown-divider"></div>*/}
            {/*                    <a className="dropdown-item" href="#">Logout</a>*/}
            {/*                </div>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*        <div className="form-inline my-2 my-lg-0" id="btnTutor">*/}
            {/*            <a className="nav-link btn btn-outline-warning my-2 my-sm-0" href="#">Request a Tutor <span*/}
            {/*                className="sr-only">(current)</span></a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    </Navbar.Collapse>*/}
            {/*</nav>*/}

            <Navbar bg="primary justify-content-between" expand="lg">
                <Navbar.Brand href="/default">Tutor Finder App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/default" >Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/student-profile">Find Tutors <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/teacher-profile">Find Tutors Jobs <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="#">Contact Us <span className="sr-only">(current)</span></Link>
                    </Nav>
                    <Form inline>
                        <Button className="nav-link btn btn-outline-warning my-2 my-sm-0" variant="outline-success">Request Tutor</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )


}

export default Navmenu;

