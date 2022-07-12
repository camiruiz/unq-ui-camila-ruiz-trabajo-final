import React from 'react';
import Title from '../Components/Title';
import Guide from '../Components/Guide';
import '../Styles/App.css'


const Home = () => {
    return (
        <div className='GameContainer'>
            <Title/>    
            <Guide/>
            <img src={"/images/picturegame.jpg"}/> 
        </div>
    )
}
export default Home;