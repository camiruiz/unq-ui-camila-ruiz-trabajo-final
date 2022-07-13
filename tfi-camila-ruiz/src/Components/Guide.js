import React from "react";
import '../Styles/Title.css';
import '../Styles/App.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Guide = () => {
    const navigate = useNavigate()
    const goToPlay = () => navigate('/Game')
    const goToHowToPlay = () => navigate('/Rules')

    return (
        <div className="home-container d-grid gap-2">
            <Button size="lg" variant="outline-dark" onClick={goToPlay}> PLAY </Button>
            <Button size="lg" variant="outline-dark" onClick={goToHowToPlay}> HOW TO PLAY </Button>
        </div>

    )
}

export default Guide;