import React, { useEffect, useState } from 'react';
import '../Styles/Game.css';
import Option from './Option';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
    const [gameStarted, setGameStarted] = useState(false);
    const [round, setRound] = useState(1);
    const [maxRounds, setMaxRounds] = useState("");


    const navigate = useNavigate()
    const goToHome = () => navigate('/')

    useEffect(() => {
        checkScore()
    }, [round])

    const resetGame = () => {
        setRound(1)
        setMaxRounds("")
        setScorePlayer(0)
        setScoreBot(0)
        setOptionPlayer(null)
        setOptionBot(null)
        setGameStarted(false)
    }

    const chooseOption = (option) => {
        if (!maxRounds || round === maxRounds + 1)
            return;

        setGameStarted(true);
        setOptionPlayer(option);
        chooseOptionBot();
        setRound(round + 1)
    }

    const chooseOptionBot = () => {
        const option = options[Math.floor(Math.random() * options.length)];
        setOptionBot(option);
    }

    const checkScore = () => {
        if (optionPlayer === optionBot) {
            setWinner(`DRAW ON THE ROUND ${round - 1}`)
        }

        else if (optionPlayer.defeatedBy.includes(optionBot.id)) {
            setWinner(`BOT WINS THE ROUND ${round - 1}`)
            setScoreBot(scoreBot + 1)

        }

        else if (optionBot.defeatedBy.includes(optionPlayer.id)) {
            setWinner(`YOU WIN THE ROUND ${round - 1}`)
            setScorePlayer(scorePlayer + 1)
        }
    }

    const getGameWinner = () => {
        if (scoreBot > scorePlayer) {
            return "THE BOT WINS THE GAME :("
        } else if (scorePlayer > scoreBot) {
            return "YOU WIN THE GAME :)"
        } else {
            return "IT'S A DRAW! :/"
        }

    }

    return (
        <div className="game-container">
        <div className="content-container">
            <div className="button-container d-grid gap-2">
                <Button size="lg" variant="outline-dark" onClick={goToHome}> GO TO HOME </Button>
                <Button size="lg" variant="outline-dark" onClick={resetGame}> RESET GAME </Button>
            </div>
            <div className="game-result">
                <div className="game-result-item">
                    {gameStarted ? winner : "SELECT MAX ROUNDS AND THEN CHOOSE YOUR OPTIONS: "}
                    {round === maxRounds + 1 && <p>{getGameWinner()}</p>}
                </div>
            </div>
            <div className="info-container">
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
            <div className="players-score">
                <div className="player-container">
                    <div className="player-title">PLAYER</div>
                    {optionPlayer?.id &&
                        <img height="100px" width="100px'" alt="option" src={optionPlayer?.image} />
                    }
                    <p>SCORE: {scorePlayer}</p>
                </div>
                <div className="bot-container">
                    <div className="bot-title">BOT</div>
                    {optionBot?.id &&
                        <img height="100px" width="100px" alt="option" src={optionBot?.image} />
                    }
                    <p>SCORE: {scoreBot}</p>
                </div>
            </div>
            </div>
            <div className="game-options">
                {
                    options.map((option, index) =>
                        <Option
                            key={index}
                            choose={chooseOption}
                            value={option}
                            active={optionPlayer && option.id === optionPlayer.id}
                        />
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default Game;