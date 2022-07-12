import React, {useEffect, useState} from 'react';
import '../Styles/Game.css';
import '../Styles/Player.css';
import Option from './Option';
import {useNavigate} from 'react-router-dom';


const options = [ {
        id: "rock",
        defeatedBy: ["paper", "spock"],
        image: "/images/rock.png"
    },
    {
        id: "paper",
        defeatedBy: ["scissors", "lizard"],
        image: "/images/paper.png"
    },
    {
        id: "scissors",
        defeatedBy: ["spock","rock"],
        image: "/images/scissors.png"

    },
        {
        id: "lizard",
        defeatedBy: ["scissors", "rock"],
        image: "/images/lizard.png"
    },
    {
        id: "spock",
        defeatedBy: ["lizard", "paper"],
        image: "/images/spock.png"
    }
]


const Game = () => {

    const [optionPlayer, setOptionPlayer] = useState();
    const [optionBot, setOptionBot] = useState();
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreBot, setScoreBot] = useState(0);
    const [winner, setWinner] = useState("");

    const navigate = useNavigate()
    const goToHome = () => navigate('/')
 
    useEffect(()=>{
        checkScore()
    },[optionBot])
 

    const chooseOption = (option) => {
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
     <>
           <button type='button' onClick={goToHome}> Go to home </button>

            <div className='scorePlayer'>
                {winner}
                {scorePlayer}
                {scoreBot}
            </div>
            <div className='player-container'>
                <div className='player-title'>Player</div>
                <div className='option'>{optionPlayer?.id}</div>
            </div>
            <div className='bot-container'>

                <div className='bot-title'>Bot</div>
                <div className='option'>{optionBot?.id}</div>
            </div>
             <div className="gameStyle">
                {
                options.map((option, index) => <Option key={index} choose={chooseOption} value={option} />)
               }
            </div>
        </>
    )
}

export default Game;