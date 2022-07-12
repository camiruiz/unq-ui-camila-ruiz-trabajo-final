import React from 'react';
import Title from '../Components/Title';
import Guide from '../Components/Guide';
import '../Styles/App.css'
import '../Styles/Images.css'


const Home = () => {
    return (
        <div className='GameContainer'>
            <Title/>    
        <div className= 'image'>
            <img src={"/images/gif.gif"}/>
        </div> 
             <Guide/>  
          <div className= 'image'>
          <img src={"/images/picHome.jpg"}/>
      </div> 
      </div>

    )
}
export default Home;