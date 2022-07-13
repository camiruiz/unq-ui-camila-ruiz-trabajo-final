import React from 'react';
import Title from '../Components/Title';
import Guide from '../Components/Guide';
import '../Styles/App.css'
import '../Styles/Images.css'


const Home = () => {
    return (
        <div className="game-container">
            <div className="content-container">
                <Title />
                <div className="image">
                    <img src={"/images/gif.gif"} className="image-circle" />
                </div>
                <Guide />

                <div className="image">
                    <img src={"/images/picHome.jpg"} className="image-circle" />
                </div>
            </div>
        </div>

    )
}
export default Home;