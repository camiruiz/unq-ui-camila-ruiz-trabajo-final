import React from "react";

const Option = (props) => {
    return (
    <div className="option" onClick={props.choose} >
        {props.value.id}
    </div>
    )
}

export default Option;