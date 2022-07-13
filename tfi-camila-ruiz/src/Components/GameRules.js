import React from 'react';

const GameRules = () => {

    return (
        <div className="text-style">
            <p>-In this game you will be able to play the amount of rounds that you choose against the bot. Whoever wins the most rounds will win the game.</p>
            <p>-You need to choose the number of rounds you want to play to start the game. The minimum number of rounds you can play is 1 round and the maximum number of rounds is 10.</p>
            <p>-To win a round you must choose one of the 5 options (rock, paper, scissors, lizard or spock) and beat the choice of the bot. Once you win the game you can reset the game to play more rounds.</p>
            <p>-In case of beating the bot you will win 1 point, in case you lose, the bot will win 1 point, and in case of a tie neither will win points.</p>
            <p>-Here below we leave you an image so you can see which choice beats another.</p>
        </div>
    )
}

export default GameRules;