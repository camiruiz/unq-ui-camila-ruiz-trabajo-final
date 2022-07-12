import React, {useState} from 'react';
import '../Styles/Game.css';
import Option from './Option';
import { FaHandRock } from 'react-icons/fa';
import Score from './Score'
 


const options = [ {
        id: "piedra",
        defeatedBy: ["papel", "spock"]
    },
    {
        id: "papel",
        defeatedBy: ["tijera", "lagarto"]
    },
    {
        id: "tijera",
        defeatedBy: ["spock","piedra"]

    },
        {
        id: "lagarto",
        defeatedBy: ["tijera", "piedra"]
    },
    {
        id: "spock",
        defeatedBy: ["lagarto", "papel"]
    }
]


const Game = () => {

    const [optionPlayer, setOptionPlayer] = useState();
    const [optionBot, setOptionBot] = useState();
    const [score, setScore] = useState(0);
    const [winner, setWinner] = useState("");


    const chooseOption = (event) => {
        const option = options.find(o => o.id === event.target.textContent);
        setOptionPlayer(option);
        chooseOptionBot();
        
     }

    const chooseOptionBot = () => {
        const option = options[Math.floor(Math.random() * options.length)];

        setOptionBot(option);
    }


    return( 
        
        <div className='App'>
            <Score optionBot={optionBot} optionPlayer={optionPlayer}/>
             <main>
            <section>
                <div className="player">Player</div>
                <div className="option">{optionPlayer?.id}</div>
            </section>
            <section>
                <div className="player">Bot</div>
                <div className="option">{optionBot?.id}</div>
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