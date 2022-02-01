import React from "react";
// import Card from "../components/card";
// import Project from "../components/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Container from "../components/container"
import { faNode, faJsSquare, faHtml5, faReact, faNpm, faCss3Alt, } from "@fortawesome/free-brands-svg-icons"
import images from "../images/Hawaii.jpg"
import { Col, Row, Container, Image } from "react-bootstrap";


function About() {

    return (
        // <Container>
        //     <Row >
        //         <Col xs={12}>


        //             <div style={{ background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)", margin: "100px", borderStyle: "outset", padding: "20px", color: "whitesmoke", fontFamily: "Lucida Handwriting, Brush Script MT, Cursive", fontSize: "20px", textShadow: "2px 2px 5px rgb(0, 175, 219)" }}>

        //                 <div className="header" style={{ backgroundColor: "black", margin: "5px", color: "white", textAlign: "center" }}>About Me</div>

        //                 <div className="clearfix">

        //                     <img src={images} alt="" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" style={{ borderStyle: "groove" }} />

        //                     <p>
        //                         Hello, my name is Joseph Guajardo and welcome to my portfolio!I’m an aspiring Full Stack Software Engineer, building upon my skill set everyday.The past 12 years, I’ve been working in the retail customer service industry where I was successful building relationships with a wide range of clientele.2020 was a rough year for everyone, but this is the year that I decided I wanted to expand my knowledge and learn to code.I enrolled in U.C Davis coding bootcamp, and haven’t looked back since.
        //                     </p>


        //                     <p>
        //                         On the days I don’t spend coding, I enjoy going on hikes, cooking up some good food, playing video games, or binge watching a tv series.I also love to travel with my biggest trip being a London, Paris, and Amsterdam adventure.
        //                     </p>

        //                     <p>
        //                         With the experience I’ve gained working with people from all facets of life and the skills gained through the bootcamp, I look forward to working with a team to build a better tomorrow.
        //                     </p>


        //                     <div className="container-sm">
        //                         <div className="row">
        //                             <div className="col">
        //                                 <h1>Dont hesitate to contact me!</h1>
        //                                 <p> Email:
        //                                     <a href="mailto:josephguajardo@ymail.com">josephguajardo @ymail.com</a>
        //                                 </p>
        //                                 <p>Phone: (916)225-2807</p>
        //                             </div>
        //                         </div>
        //                     </div>


        //                 </div>


        //             </div>
        //             <div className="container">
        //                 <h1 style={{ textAlign: "center" }}>Skills</h1>
        //                 <hr></hr>
        //                 <div style={{ textAlign: "center" }}>

        //                     <FontAwesomeIcon icon={faNode} size="5x" />
        //                     <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faHtml5} size="5x" />
        //                     <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faCss3Alt} size="5x" />
        //                     <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faReact} size="5x" />
        //                     <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faNpm} size="5x" />
        //                     <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faJsSquare} size="5x" />

        //                 </div>
        //             </div>



        //         </Col>
        //     </Row>
        // </Container>

        //making mobile accessible 

        <Container style={{
            background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)",
            borderStyle: "outset",
            padding: "20px", color: "whitesmoke",
            fontFamily: "Lucida Handwriting, Brush Script MT, Cursive",
            fontSize: "20px",
            textShadow: "2px 2px 5px rgb(0, 175, 219)",
            marginTop: "100px",
            marginBottom: "100px",


        }}>
            <Row>
                <Col className="header" style={{
                    backgroundColor: "black",
                    margin: "5px",
                    color: "white",
                    textAlign: "center"
                }}>

                    <div className="header" >About me</div>

                </Col>
            </Row>

            <Row>

                <Col lg={6} xs={12}>
                    <p>
                        <Image fluid src={images} alt="joe" className="img-fluid " style={{
                            borderStyle: "groove",

                        }} />
                    </p>
                    {/* <img src={images} alt="" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" style={{ borderStyle: "groove" }} /> */}
                </Col>
                <Col lg={6} xs={12}>
                    <div>
                        <p>
                            Hello, my name is Joseph Guajardo and welcome to my portfolio! I’m an aspiring Full Stack Software Engineer, building upon my skill set everyday.
                            For the past 12 years, I’ve been working in the retail customer service industry where I successfully built relationships with a wide range of clientele.
                            2020 was a year of uncertainty for the world. It made us take a step back and re-evaluate what was important in our lives. This is the year I decided I needed
                            to make a change. I wanted to learn and develope new skills in an ever changing world. I decided to join a coding bootcamp with U.C. Davis to really stretch my
                            knowledge to the limit.
                        </p>
                        <p>
                            In my spare time I enjoy going on hikes, cooking a good meal for people to enjoy, playing video games, or binge watching the best of what pop culture has provided us.
                            As a kid, I always dreamed of traveling the world. I put my dreams to the test the last 10 years, and I've been to 3 differnt countries and 7 differnt states.
                            Where to next you ask? Only time will tell, but what I can tell you now is that I've accomplished way more than I ever anticipated. With my story only just begining,
                            I can't wait to see what life throws at me next!
                        </p>

                        {/* <p>
                            With the experience I’ve gained working with people from all facets of life along with the skills gained through the bootcamp, I look forward to working with a team
                            to build a better tomorrow.
                        </p> */}


                    </div>

                </Col>
                {/* <Col>
                    <div className="container-sm">
                        <div className="row">
                            <div className="col">
                                <h1>Dont hesitate to contact me!</h1>
                                <p> Email:
                                    <a style={{ color: "black" }} href="mailto:josephguajardo@ymail.com">josephguajardo @ymail.com</a>
                                </p>
                                <p>Phone: (916)225-2807</p>
                            </div>
                        </div>
                    </div>
                </Col> */}
            </Row>
            <br />
            <br />
            <Col>
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>Skills</h1>
                    <hr></hr>
                    <div style={{ textAlign: "center" }}>

                        <FontAwesomeIcon icon={faNode} size="5x" />
                        <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faHtml5} size="5x" />
                        <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faCss3Alt} size="5x" />
                        <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faReact} size="5x" />
                        <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faNpm} size="5x" />
                        <FontAwesomeIcon style={{ paddingLeft: "25px" }} icon={faJsSquare} size="5x" />

                    </div>
                </div>
            </Col>




        </Container>




    )
};

export default About