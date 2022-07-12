import React from "react";


const Score = ({optionPlayer, optionBot}) => {
    if (optionPlayer === optionBot) {
        return 'Draw'
    } 
    
    else if (optionPlayer.defeatedBy.includes(optionBot.id)) {
        return 'Bot Wins'
    }
    
    else if (optionBot.defeatedBy.includes(optionPlayer.id)){ 
        return 'Player Wins'
    }
}

export default Score;