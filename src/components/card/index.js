import React from "react";

function Card(props) {
    return (

        <div className="col" >
            {props.children}
        </div>
    )

}

export default Card;