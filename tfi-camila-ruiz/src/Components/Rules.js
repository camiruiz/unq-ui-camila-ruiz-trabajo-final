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
                <div className="image-gif">
                    <img alt="gif" src={"/images/rules.gif"}  />
                </div>

            </div>
        </div>


    )
}

export default Rules;