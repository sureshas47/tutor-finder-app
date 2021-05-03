import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/default">Tutor Finder App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link  className="nav-link" to="/default">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="student-profile">Find Tutors<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="teacher-profile">Find Tutors Jobs <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown" id='user'>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0" id="btnTutor">
                        <a className="nav-link btn btn-outline-warning my-2 my-sm-0" href="#">Request a Tutor <span
                            className="sr-only">(current)</span></a>
                    </div>
                </div>
            </nav>

        </div>
    )


}

export default Navbar;