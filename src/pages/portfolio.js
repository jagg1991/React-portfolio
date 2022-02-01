import React from "react";
import Card from "../components/card"
import Project from "../components/project"
import popflix from "../images/popflix.png"
import assign from "../images/assign-it.png"
import weather from "../images/weather.png"
import calander from "../images/calander.png"
import { Col } from "react-bootstrap";

// import Container from "../components/container";

function Portfolio() {
    return (
        // <Container >
        //     <Card >
        //         <Project
        //             style={{ margin: "20px", borderStyle: "inset" }}
        //             src={popflix}
        //             alt="popflixs"
        //             header="PopFlix!"
        //             body="This has been my favorite project that I've worked on so far. Having trouble
        //     picking a
        //     movie on your favorite streaming service? We have an answer to that! The user will be able to
        //     enter a genre, decade, rating and an actor and they will be presented with a random movie. 
        //     They will also see what streaming service its steaming on, and be able to click on the link 
        //     and be taken to the site. Click the link below to try it out yourself! Adam and
        //     Skyler made this project into what it looks like today, I
        //     wouldn't have been able to do it without them!"
        //             href="https://mradamhorn.github.io/popflix/"
        //             link="PopFlix!"

        //         />
        //     </Card>
        //     <Card>
        //         <Project
        //             style={{ margin: "20px" }}
        //             src={assign}
        //             alt="Assign-it!"
        //             header="Assign-it!"
        //             body="Are you a company looking for an easy way to interact with employees as well as
        //             delegate tasks and view current project status? Well we have an app for you!                  
        //             and I worked on this project deligation project in
        //             our coding boot camp. In this app, the user is able to sign up for either a manager or a employee.
        //             The manager can delagate task to the employees, and when the employee logs in, they are able to see
        //             what they have to do for the day! Our future development plans are to include a time clock in and
        //             out, and would be a great fit for small businesses! Check out the link below!"
        //             href="https://assign-it4568.herokuapp.com/"
        //             link="Assign-it!"

        //         />
        //     </Card>

        //     <Card>
        //         <Project
        //             style={{ margin: "20px" }}
        //             src={weather}
        //             alt="Weather forecast!"
        //             header="Weather forecast!"
        //             body="On this project, I was able to create a weather forecast page. The user is able
        //             to
        //             enter
        //             the city they would like to see,
        //             and it will return current conditions, uv index, humidity, and wind speed. The user will also be
        //             presented
        //             with a 5 day forecast. Click the
        //             link below to try it out!"
        //             href="https://jagg1991.github.io/weather/"
        //             link="Weather forecast!"

        //         />
        //     </Card>
        //     <Card>
        //         <Project
        //             style={{ margin: "20px" }}
        //             src={calander}
        //             alt="Calander!"
        //             header="Calander!"
        //             body="On this project, I was able to create a calander for the users work day. The
        //             user
        //             will be
        //             able to enter a reminder in the time slot, click the save button, and it will save in the local
        //             storage.
        //             The time slots are color cordindated to show what time of day it is. Click the link below to try
        //             it
        //             out!"
        //             href="https://jagg1991.github.io/calander/"
        //             link="Calander!"

        //         />
        //     </Card>

        // </Container >



        <div className="container-sm" style={{ background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)", borderStyle: "outset", marginTop: "75px", marginBottom: "75px", padding: "75px" }}>

            <div className="header" style={{ textAlign: "center", fontSize: "50px", color: "whitesmoke", fontFamily: "Lucida Handwriting, Brush Script MT, Cursive", textShadow: "2px 2px 5px rgb(0, 175, 219)" }}>Check out the best of my work!</div>

            <Card >
                <Project
                    style={{ margin: "75px" }}
                    src={popflix}
                    alt="popflixs"
                    header="PopFlix!"
                    body="This has been my favorite project that I've worked on so far. Having trouble
                    picking a
                    movie on your favorite streaming service? We have an answer to that! The user will be able to
                    enter a genre, decade, rating and an actor and they will be presented with a random movie. 
                    They will also see what streaming service its steaming on, and be able to click on the link 
                    and be taken to the site. Click the link below to try it out yourself! Adam and
                    Skyler made this project into what it looks like today, I
                    wouldn't have been able to do it without them!"
                    href="https://mradamhorn.github.io/popflix/"
                    link="PopFlix!"

                />
            </Card>

            <Card>
                <Project
                    style={{ margin: "75px" }}
                    src={assign}
                    alt="Assign-it!"
                    header="Assign-it!"
                    body="Are you a company looking for an easy way to interact with employees as well as
                    delegate tasks and view current project status? Well we have an app for you!                  
                    and I worked on this project deligation project in
                    our coding boot camp. In this app, the user is able to sign up for either a manager or a employee.
                    The manager can delagate task to the employees, and when the employee logs in, they are able to see
                    what they have to do for the day! Our future development plans are to include a time clock in and
                    out, and would be a great fit for small businesses! Check out the link below!"
                    href="https://assign-it4568.herokuapp.com/"
                    link="Assign-it!"

                />
            </Card>
            <Col></Col>
            <Card>
                <Project
                    style={{ margin: "75px" }}
                    src={weather}
                    alt="Weather forecast!"
                    header="Weather forecast!"
                    body="On this project, I was able to create a weather forecast page. The user is able
                    to
                    enter
                    the city they would like to see,
                    and it will return current conditions, uv index, humidity, and wind speed. The user will also be
                    presented
                    with a 5 day forecast. Click the
                    link below to try it out!"
                    href="https://jagg1991.github.io/weather/"
                    link="Weather forecast!"

                />
            </Card>
            <Card>
                <Project
                    style={{ margin: "75px" }}
                    src={calander}
                    alt="Calander!"
                    header="Calander!"
                    body="On this project, I was able to create a calander for the users work day. The
                    user
                    will be
                    able to enter a reminder in the time slot, click the save button, and it will save in the local
                    storage.
                    The time slots are color cordindated to show what time of day it is. Click the link below to try
                    it
                    out!"
                    href="https://jagg1991.github.io/calander/"
                    link="Calander!"

                />
            </Card>
        </ div>
    )

}

export default Portfolio