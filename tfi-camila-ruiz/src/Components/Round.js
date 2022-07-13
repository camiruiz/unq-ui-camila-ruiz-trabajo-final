import React from "react";

const Round = ({ round, maxRounds, setMaxRounds }) => {
    return (
        <div className="round-container">
            <div className="round">
                {maxRounds && round !== maxRounds + 1 && <p>ACTUAL ROUND: {round}</p>}
                {round === 1 ? <label>MAX ROUNDS: <input type="number" min={1} max={10} value={maxRounds} onChange={(e) => {
                    const maxRounds = parseInt(e.target.value)
                    if (maxRounds && e.target.validity.valid) {
                        setMaxRounds(maxRounds)
                    }
                    e.preventDefault()
                }} /> </label>
                    : <p>MAX ROUNDS: {maxRounds} </p>}
            </div>
        </div>
    );
}

export default Round;