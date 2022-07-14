import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';
import Title from './Title';
import GameRules from './GameRules';


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
                        <Title
                            title="How to play Rock, Paper, Scissors, Lizard or Spock?"
                        />
                    </div>

                    <div className="image-container">
                        <div className="image">
                            <img alt="gif" src={"/images/simple.gif"} className="image-circle" />
                        </div>
                    </div>

                    <GameRules />

                    <div className="image-gif">
                        <img alt="gif" src={"/images/rules.gif"} />
                </div>
            </div>
        </div>
    )
}

export default Rules;