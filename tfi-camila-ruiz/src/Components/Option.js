import React from "react";

const Option = (props) => {
    return (
        <div className="image">
        <img src={props.value.image} onClick={()=>props.choose(props.value)}/>
        </div>
    )
}  

export default Option;