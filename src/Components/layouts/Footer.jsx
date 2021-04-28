import React from "react";

const Footer=()=>{
    return (
        <>
            <footer className="page-footer font-small teal pt-4 jumbotron">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase font-weight-bold">About Us</h5>
                            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                                most popular front-end open source toolkit, featuring Sass variables and mixins,
                                responsive grid system, extensive prebuilt components, and powerful JavaScript
                                plugins.</p>

                        </div>
                        <div className="col-md-6 mb-md-0 mb-3">

                            <h5 className="text-uppercase font-weight-bold">Our Benefits</h5>
                            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                                most popular front-end open source toolkit, featuring Sass variables and mixins,
                                responsive grid system, extensive prebuilt components, and powerful JavaScript
                                plugins.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="#">tutor-finder-app.com</a>
                </div>

            </footer>
        </>
    )
}

export default Footer;