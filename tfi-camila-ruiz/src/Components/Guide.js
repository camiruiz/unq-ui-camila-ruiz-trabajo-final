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
        <div className="title-container d-grid gap-2">
            <Button size="lg" variant="danger" onClick={goToPlay}> Play </Button>
            <Button size="lg" variant="danger" onClick={goToHowToPlay}> How to play </Button>
        </div>

    )
}

export default Guide;