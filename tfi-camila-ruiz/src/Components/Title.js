import React from 'react';
import '../Styles/Home.css';

const Title = ({title}) => {

    return (
            <div className="title-style">
                <h1> {title} </h1>
            </div>
    )
}

export default Title;