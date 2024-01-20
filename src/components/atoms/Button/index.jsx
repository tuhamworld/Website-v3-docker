import React from "react";
import "./index.scss";

const Button = (props) => {
    return (

        <a href={props.link} className={props.className }>
            {props.text}
        </a>

    )
}

export default Button;