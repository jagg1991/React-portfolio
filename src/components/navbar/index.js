import React from "react";
// import { Link } from "react-router-dom";
import GitBtn from "../GitBtn"
import { Navbar, Nav, } from "react-bootstrap"

function NavbarDrop(props) {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <GitBtn />
                </Nav>

            </Navbar.Collapse>
        </Navbar>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">



        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-expanded="false" aria-controls="navbarNavDropdown">
        //             <span className="navbar-toggler-icon">button</span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">

        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link
        //                         className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}

        //                         to="home"
        //                     >Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link
        //                         className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}

        //                         to="portfolio"
        //                     >Portfolio</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link
        //                         className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}

        //                         to="contact"
        //                     >Contact</Link>
        //                 </li>
        //                 <GitBtn />
        //             </ul>
        //             <a className="nav-link" href="#">Home</a>
        //                 <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
        //                 <a className="nav-link" href="#">Contact</a>

        //         </div>
        //     </div>

        // </nav >

    )

}

export default NavbarDrop;