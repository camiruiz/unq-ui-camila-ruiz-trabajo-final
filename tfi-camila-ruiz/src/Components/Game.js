import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Option from './Option';
import Button from 'react-bootstrap/Button';
import '../Styles/Game.css';
import PlayerScore from './PlayerScore';
import Round from './Round';


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
            setWinner(`BOT WINS ROUND ${round - 1}`)
            setScoreBot(scoreBot + 1)

        }

        else if (optionBot.defeatedBy.includes(optionPlayer.id)) {
            setWinner(`YOU WIN ROUND ${round - 1}`)
            setScorePlayer(scorePlayer + 1)
        }
    }

    const getGameWinner = () => {
        if (scoreBot > scorePlayer) {
            return "THE BOT WON THE GAME :("
        } else if (scorePlayer > scoreBot) {
            return "YOU WON THE GAME :)"
        } else {
            return "IT'S A DRAW IN THE GAME! :/"
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
                        {gameStarted ? winner : "SELECT MAX ROUNDS AND PLAY! "}
                        {round === maxRounds + 1 && <p>{getGameWinner()}</p>}
                    </div>
                </div>
                <div className="info-container">
                    <Round 
                        round={round} 
                        maxRounds={maxRounds}
                        setMaxRounds={setMaxRounds}
                    />

                    <div className="players-score">
                        <PlayerScore
                            title="PLAYER"
                            className="player-container"
                            score={scorePlayer}
                            optionPlayer={optionPlayer}
                        />
                        <PlayerScore
                            title="BOT"
                            className="bot-container"
                            score={scoreBot}
                            optionPlayer={optionBot}
                        />
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