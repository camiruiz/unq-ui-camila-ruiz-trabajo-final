import React from 'react';
import '../Styles/Title.css';
import {useNavigate} from 'react-router-dom';

 
const Rules = () => {
    const navigate = useNavigate()
    const goToHome = () => navigate('/')
 
    return (
        <>
        <div className='GameContainer'>
            
            <button type='button' onClick={goToHome}> Go to home </button>
            <div className='title-container'>

            <div className='titleStyle'>
                <h1> How to play "Rock, Hand, Scissors, Lizard o Spock"?</h1>
            </div>
            </div>
        </div>
        </>

    )
}

export default Rules;