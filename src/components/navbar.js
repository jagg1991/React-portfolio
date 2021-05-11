import React from "react";
// import { Link } from "react-router-dom";


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">


                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a className="nav-link" href="#">Home</a>
                        <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;