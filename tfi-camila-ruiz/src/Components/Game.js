import React, {useEffect, useState} from 'react';
import '../Styles/Game.css';
import Option from './Option';
  


const options = [ {
        id: "piedra",
        defeatedBy: ["papel", "spock"]
    },
    {
        id: "papel",
        defeatedBy: ["tijera", "lagarto"]
    },
    {
        id: "tijera",
        defeatedBy: ["spock","piedra"]

    },
        {
        id: "lagarto",
        defeatedBy: ["tijera", "piedra"]
    },
    {
        id: "spock",
        defeatedBy: ["lagarto", "papel"]
    }
]


const Game = () => {

    const [optionPlayer, setOptionPlayer] = useState();
    const [optionBot, setOptionBot] = useState();
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreBot, setScoreBot] = useState(0);
    const [winner, setWinner] = useState("");

    useEffect(()=>{
        checkScore()
    },[optionBot])
 

    const chooseOption = (event) => {
        const option = options.find(o => o.id === event.target.textContent);
        setOptionPlayer(option);
        chooseOptionBot();
        
     }

    const chooseOptionBot = () => {
        const option = options[Math.floor(Math.random() * options.length)];

        setOptionBot(option);
    }

    const checkScore = () => {
        if (optionPlayer === optionBot) {
            setWinner('Draw')
        } 
        
        else if (optionPlayer.defeatedBy.includes(optionBot.id)) {
            setWinner('Bot Wins')
            setScoreBot(scoreBot+1)
            
        }
        
        else if (optionBot.defeatedBy.includes(optionPlayer.id)){ 
            setWinner('Player Wins')
            setScorePlayer(scorePlayer+1)
        }
    }

    return( 
        
        <div className='App'>
            {winner}
            {scorePlayer}
            {scoreBot}
            <main>
            <section>
                <div className="player">Player</div>
                <div className="option">{optionPlayer?.id}</div>
            </section>
            <section>
                <div className="player">Bot</div>
                <div className="option">{optionBot?.id}</div>
            </section>
            </main>
        
             <div className="gameStyle">
                {
                options.map((option, index) => <Option key={index} choose={chooseOption} value={option} />)
               }
            </div>
        </div>
    )
}

export default Game;