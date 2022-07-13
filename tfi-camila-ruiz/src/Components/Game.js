import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import '../Styles/Player.css';
import Option from './Option';
import { useNavigate } from 'react-router-dom';


const options = [{
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
    defeatedBy: ["spock", "rock"],
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

    useEffect(() => {
        checkScore()
    }, [optionBot])

    const resetGame = () => {
        setScorePlayer(0)
        setScoreBot(0)
        setOptionPlayer(null)
        setOptionBot(null)
    }


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
            setScoreBot(scoreBot + 1)

        }

        else if (optionBot.defeatedBy.includes(optionPlayer.id)) {
            setWinner('Player Wins')
            setScorePlayer(scorePlayer + 1)
        }
    }

    return (
        <div className='GameContainer'>

            <button type='button' onClick={goToHome}> Go to home </button>
            <button type='button' onClick={resetGame}> Reset Score </button>

            <div className='game-result'>
                {winner}
            </div>

            <div className='players-score'>
                <div className='player-container'>
                    <div className='player-title'>Player</div>
                    {optionPlayer?.id && 
                        <img height='100px' width='100px' src={optionPlayer?.image}></img> 
                    }
                    <p>Score: {scorePlayer}</p>
                </div>
                <div className='bot-container'>
                    <div className='bot-title'>Bot</div>
                    {optionBot?.id && 
                        <img height='100px' width='100px' src={optionBot?.image}></img> 
                    }
                    <p>Score: {scoreBot}</p>
                </div>
            </div>

            <div className="gameOptions">
                {
                    options.map((option, index) =>
                        <Option
                            key={index}
                            choose={chooseOption}
                            value={option}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Game;