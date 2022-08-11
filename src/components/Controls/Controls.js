import React from 'react'
import './Controls.sass'
import { useSelector } from 'react-redux'

const Controls = ({startGameFunc, stopGameFunc})  => {

    const gameStatus = useSelector(state => { return state.gameStatus })

    return(
        <div className='controls'>
            <button className='controls__button'
                onClick={gameStatus === 'inProgress' ? stopGameFunc : startGameFunc}
            >
                {
                    gameStatus !== 'inProgress' &&
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 300 300">
                        <polygon className="st0" points="224.9,150 94.4,74.7 94.4,225.3 "/>
                    </svg>
                }
                {
                    gameStatus === 'inProgress' &&
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 300 300">
                        <rect x="93.5" y="84" className="st0" width="45" height="132"/>
                        <rect x="161.5" y="84" className="st0" width="45" height="132"/>
                    </svg>
                    
                }
            </button>
        </div>
        )
}

export default Controls;