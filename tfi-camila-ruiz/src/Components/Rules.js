import React from 'react';
import '../Styles/Title.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Rules = () => {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')
    const goToPlay = () => navigate('/Game')

    return (

        <div className="game-container">
            <div className="content-container">

                <div className="button-container d-grid gap-2">
                    <Button size="lg" variant="outline-dark" onClick={goToHome}> GO TO HOME </Button>
                    <Button size="lg" variant="outline-dark" onClick={goToPlay}> PLAY NOW </Button>
                </div>
                <div className="home-container">

                    <div className="title-style">
                        <h1> How to play "Rock, Paper, Scissors, Lizard o Spock"?</h1>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img alt="gif" src={"/images/simple.gif"} className="image-circle"/>
                    </div>
                </div>
                <div className="text-style">
                        <p>-In this game you will be able to play the amount of rounds that you choose against the bot. Whoever wins the most rounds will win the game.</p>
                        <p>-You need to choose the number of rounds you want to play to start the game.</p>
                        <p>-The minimum number of rounds you can play is 1 round and the maximum number of rounds is 10.</p>
                        <p>-To win a round you must choose one of the 5 options (rock, paper, scissors, lizard or spock) and beat the choice of the bot.</p>
                        <p>-Once you win the game you can reset the game to play more rounds.</p>
                        <p>-In case of beating the bot you will win 1 point, in case you lose, the bot will win 1 point, and in case of a tie neither will win points.</p>
                        <p>-Here below we leave you an image so you can see which choice beats another:</p>
                    </div>
                <div className="image-gif">
                    <img alt="gif" src={"/images/rules.gif"}  />
                </div>

            </div>
        </div>


    )
}

export default Rules;