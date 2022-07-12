import React from "react";
import '../Styles/Title.css';
import '../Styles/App.css'
import {useNavigate} from 'react-router-dom';


const Guide = () => {
    const navigate = useNavigate()
    const goToPlay = () => navigate('/Game')
    const goToHowToPlay = () => navigate('/Rules')

    return(
        
            <div className='title-container'>
             <button type='button' onClick={goToPlay}> Play </button>

             <button type='button' onClick={goToHowToPlay}> How to play </button>
            </div> 

    )
}

export default Guide;