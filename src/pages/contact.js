import React from "react";
// import Card from "../components/card";
// import Project from "../components/project";
import Container from "../components/container"
function Contact() {

    return (
        // <Container>

        //     <Card>
        //         <Project
        //             style={{ margin: "20px" }}
        //             header="Contact"
        //             body="Coding is the best"
        //             href="#"
        //             link="go somewhere"

        //         />

        //     </Card>

        // </Container >

        <Container>
            <div className="card text-center" style={{ background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)", margin: "50px", color: "whitesmoke", fontFamily: "Lucida Handwriting, Brush Script MT, Cursive", fontSize: "20px", textShadow: "2px 2px 5px rgb(0, 175, 219)" }}>
                <div className="card-header">
                    Contact me
</div>
                <div class="card-body">
                    <h3 className="text-center"><strong></strong></h3>
                    <h4 className="text-center">Joseph Guajardo</h4>
                    <h5 className="text-center">Citrus Heights, CA</h5>
                    <h6 className="text-center">Josephguajrdo@ymail.com</h6>

                    <a className="btn btn-dark fab fa-linkedin btn-lg" href="https://www.linkedin.com/in/joseph-guajardo-200793a8/"
                        role="button">
                    </a>
                    <a className="btn btn-dark fab fa-github-square btn-lg" href="https://github.com/jagg1991" role="button">

                    </a>
                    {/* <a href="Assets/pdf/joseph.pdf" class=" btn btn-dark far fa-file-pdf btn-lg"></a> */}
                </div>
                <div className="card-footer">
                    See my Resume!
</div>
            </div>
        </Container >


    )
};

export default Contact