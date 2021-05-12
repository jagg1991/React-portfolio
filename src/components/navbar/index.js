import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">


                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}

                                    to="home"
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}

                                    to="portfolio"
                                >Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}

                                    to="contact"
                                >Contact</Link>
                            </li>
                        </ul>
                        {/* <a className="nav-link" href="#">Home</a>
                        <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Contact</a> */}

                    </div>
                </div>
            </div>
        </nav >

    )

}

export default Navbar;