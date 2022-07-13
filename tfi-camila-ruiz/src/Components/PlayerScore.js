import React from "react";

const PlayerScore = ({ title, className, score, optionPlayer }) => {
    return (
        <div className={className}>
            <div className="player-title">{title}</div>
            <p>SCORE: {score}</p>
            {optionPlayer?.id &&
                <img height="100px" width="100px'" alt="option" src={optionPlayer?.image} />
            }
        </div>
    );
}

export default PlayerScore;
