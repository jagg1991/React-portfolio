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
            <div className="container">
                <div className="card text-center" style={{ background: "linear-gradient(115deg, #151b1b 30%, #585858 70%)", margin: "50px", boxSizing: "border-box" }}>
                    <div className="card-header" style={{ color: "white", textShadow: "2px 2px 5px rgb(0, 175, 219)" }}>
                        Contact me
                </div>
                    <div className="card-body">
                        <form style={{ margin: "20px" }} action="mailto:josephguajardo@ymail.com" method="POST" enctype="multipart/form-data" id="contactme">
                            <div className="forms pad" >
                                <div className="row input1">

                                    <div className="form-floating pad" style={{ margin: "10px" }}>
                                        <input type="text" className="form-control-lg form-control" id="floatingInput"
                                            placeholder="Name" />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                </div>

                                <div className="row input">
                                    <div className="form-floating pad" style={{ margin: "10px" }}>
                                        <input type="email" className="form-control-lg form-control" id="floatingInput"
                                            placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>


                                </div>
                                <div className="form-floating pad" style={{ margin: "10px" }}>
                                    <textarea className="form-control-lg form-control" id="floatingTextarea" placeholder="Message"
                                        style={{ height: "35%;" }}></textarea>
                                    <label for="floatingTextarea">Message</label>
                                </div>


                                <button className="btn btn-dark" type="submit"
                                    style={{ border: "none", marginTop: "5px", backgroundColor: "#55acee" }} form="contactme"
                                    value="Submit">Send
                                {/* <i className="far fa-envelope"></i> Send */}
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

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