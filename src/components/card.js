import React from "react";

function Card(props) {
    return (

        <div className="col-sm-6">
            {props.children}
        </div>
    )

}

export default Card;