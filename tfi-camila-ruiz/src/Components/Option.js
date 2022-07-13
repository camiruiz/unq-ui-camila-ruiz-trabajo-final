import React from "react";

const Option = (props) => {
    return (
        <div className="gameOption">
            <img width="200" height="200" src={props.value.image} onClick={() => props.choose(props.value)} />
        </div>
    )
}

export default Option;