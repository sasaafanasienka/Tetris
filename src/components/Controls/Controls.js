import React from 'react';
import './Controls.sass'
import start from '../../images/start.svg'
import pause from '../../images/pause.svg'
import { useSelector } from 'react-redux';

function Controls(props) {

    const gameStatus = useSelector(state => {return state.gameStatus})

    let startClassName = (gameStatus === 'inProgress') ? 'button button_unactive' : 'button button_active'
    let startFunction = (gameStatus === 'inProgress') ? null : props.startGame
    let pauseClassName = (gameStatus === 'inProgress') ? 'button button_active' : 'button button_unactive'
    let pauseFunction = (gameStatus === 'inProgress') ? props.stopGame : null

    return(
        <div className='Controls'>
            <button className={startClassName} onClick={startFunction}>
                <img src={start}></img>
            </button>
            <button className={pauseClassName} onClick={pauseFunction}>
                <img src={pause}></img>
            </button>
        </div>
        )
}

export default Controls;