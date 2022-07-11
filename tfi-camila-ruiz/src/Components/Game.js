import React, {useState} from 'react';
import '../Styles/Game.css';
import Option from './Option';
 


const options = [ {
        id: "piedra"
    },
    {
        id: "papel"
    },
    {
        id: "tijera"
    },
        {
        id: "lagarto"
    },
    {
        id: "spock"
    }
]


const Game = () => {

    const [optionPlayer, setOptionPlayer] = useState("");
    
    const chooseOption = (event) => {
        setOptionPlayer(event.target.textContent);
     }

    return( 
        
        <div className='App'>
            <main>
                <section>
                <div className="player">Player</div>
                <div className="option">{optionPlayer}</div>
                </section>
            </main>
        
             <div className="gameStyle">
                {
                options.map((option) => <Option choose={chooseOption} value={option} />)
               }
            </div>
        </div>
    )
}

export default Game;