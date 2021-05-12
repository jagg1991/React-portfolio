import React from "react";
// import Card from "../components/card";
// import Project from "../components/projects";
// import FontAwesomeIcon from "../components/fontAwesomeIcons"
import Container from "../components/container"
import images from "../images/Hawaii.jpg"


function About() {

    return (
        <div>
            <Container style={{ margin: "100px", borderStyle: "outset", padding: "10px" }}>

                <div className="header" style={{ backgroundColor: "black", margin: "5px", color: "white" }}>About Me</div>
                <div className="clearfix">
                    <img src={images} alt="" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" />

                    <p>
                        Hello, my name is Joseph Guajardo and welcome to my portfolio! I’m an aspiring Full Stack Software Engineer, building upon my skill set everyday. The past 12 years, I’ve been working in the retail customer service industry where I was successful building relationships with a wide range of clientele. 2020 was a rough year for everyone, but this is the year that I decided I wanted to expand my knowledge and learn to code. I enrolled in U.C Davis coding bootcamp, and haven’t looked back since.
  </p>

                    <p>
                        On the days I don’t spend coding, I enjoy going on hikes, cooking up some good food, playing video games, or binge watching a tv series. I also love to travel with my biggest trip being a London, Paris, and Amsterdam adventure.
  </p>

                    <p>
                        With the experience I’ve gained working with people from all facets of life and the skills gained through the bootcamp, I look forward to working with a team to build a better tomorrow.
  </p>
                </div>


            </Container>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Skills</h1>
                <hr></hr>
                <div>
                    {/* <FontAwesomeIcon icon="node" /> */}

                </div>
            </div>
        </div>


    )
};

export default About