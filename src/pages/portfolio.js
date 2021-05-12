import React from "react";
import Card from "../components/card"
import Project from "../components/projects"
function Portfolio() {
    return (
        <>
            <Card>
                <Project
                    style={{ margin: "20px" }}
                    header="Hello world"
                    body="Coding is the best!"
                    href="#"
                    link="go somewhere"

                />
            </Card>
        </>
    )

}

export default Portfolio