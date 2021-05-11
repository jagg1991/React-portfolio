import React from "react"

function Project(props) {
    return (
        <>
            <div className="card text-center" style={props.style}>


                <div className="card-header">{props.header}</div>
                <img src={props.src} class="card-img-top" alt={props.alt} />
                <div className="card-body">{props.body}
                    <div>
                        <a href={props.href} className="btn text-white bg-dark">{props.link}</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Project