import React from "react";
// import Card from "../components/card";
// import Project from "../components/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Container from "../components/container"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import images from "../images/Hawaii.jpg"


function About() {

    return (
        <div className="container-sm">
            <div style={{ background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)", margin: "100px", borderStyle: "outset", padding: "10px", color: "whitesmoke", fontFamily: "Lucida Handwriting, Brush Script MT, Cursive", fontSize: "20px", textShadow: "2px 2px 5px rgb(0, 175, 219)" }}>

                <div className="header" style={{ backgroundColor: "black", margin: "5px", color: "white" }}>About Me</div>
                <div className="clearfix">
                    <img src={images} alt="" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" style={{ borderStyle: "groove" }} />

                    <p>
                        Hello, my name is Joseph Guajardo and welcome to my portfolio! I’m an aspiring Full Stack Software Engineer, building upon my skill set everyday. The past 12 years, I’ve been working in the retail customer service industry where I was successful building relationships with a wide range of clientele. 2020 was a rough year for everyone, but this is the year that I decided I wanted to expand my knowledge and learn to code. I enrolled in U.C Davis coding bootcamp, and haven’t looked back since.
                        </p>


                    <p>
                        On the days I don’t spend coding, I enjoy going on hikes, cooking up some good food, playing video games, or binge watching a tv series. I also love to travel with my biggest trip being a London, Paris, and Amsterdam adventure.
                    </p>

                    <p>
                        With the experience I’ve gained working with people from all facets of life and the skills gained through the bootcamp, I look forward to working with a team to build a better tomorrow.
                     </p>


                    <div className="container-sm">
                        <div className="row">
                            <div className="col">
                                <h1>Dont hesitate to contact me!</h1>
                                <p> Email:
                                    <a href="mailto:josephguajardo@ymail.com">josephguajardo@ymail.com</a>
                                </p>
                                <p>Phone: (916)225-2807</p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Skills</h1>
                <hr></hr>
                <div>
                    <FontAwesomeIcon icon={faNodeJs} size="6x" />
                    <FontAwesomeIcon icon={faNodeJs} size="6x" />

                </div>
            </div>
        </div >


    )
};

export default About