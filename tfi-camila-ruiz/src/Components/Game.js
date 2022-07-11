import React from 'react'
import '../Styles/Game.css'
 
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
    return( 
             <div className="gameStyle">
                
                {options.map((option) => {

                return <p> {option.id}</p>
                })
            }
            </div>

    )
}

export default Game;