import React from "react";
import "../Styles/Option.css"

const Option = (props) => {
    return (
        <div className="game-option">
            <img width="200" height="200" src={props.value.image} onClick={() => props.choose(props.value)} />
        </div>
    )
}

export default Option;