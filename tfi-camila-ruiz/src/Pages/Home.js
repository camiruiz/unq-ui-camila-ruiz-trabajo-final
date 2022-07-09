import React from 'react';
import Title from '../Components/Title';
import Game from '../Components/Game';
import Guide from '../Components/Guide';
import '../Styles/App.css'


const Home = () => {
    return (
        <div className='GameContainer'>
            <Title/>    
            <Guide/>
            <Game/>

        </div>
    )
}
export default Home;