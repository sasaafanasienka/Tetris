import React, { useState, useEffect, useCallback } from 'react';
import './Main.sass'
import '../../styles/button.sass'
import PlayArea from '../PlayArea/PlayArea'
import Controls from '../Controls/Controls'
import Stat from '../Stat/Stat'
import Queue from '../Queue/Queue'
import gameProcess from '../GameProcess/GameProcess'
import freePlaceToMove from '../../checks/freePlaceToMove';
import { moveDown } from '../../redux/actions/moveDown';
import { moveLeft } from '../../redux/actions/moveLeft';
import { moveRight } from '../../redux/actions/moveRight';
import { rotate } from '../../redux/actions/rotate';
import { useDispatch } from 'react-redux';

function Main() {

    const dispatch = useDispatch()

    const [ intervalID, setMoveInterval ] = useState()
    const [ gameStatus, setGameStatus ] = useState('stopped')

    function nextStep() {
        gameProcess()
    }

    function startGame() {
        window.addEventListener('keydown', keyActions)
        setMoveInterval(
            setInterval(nextStep, 100000)
            )
        }
        
    function stopGame() {
        window.removeEventListener('keydown', keyActions)
        clearInterval(intervalID)
    }

    const keyActions = useCallback((event) => { //хук useCallBack
        // console.log(event)
        if (event.code === 'Numpad5' || event.code === 'ArrowDown' || event.code === 'KeyS') {
            event.preventDefault()
            gameProcess()
        } else if (event.code === 'Numpad4' || event.code === 'ArrowLeft' || event.code === 'KeyA') {
            event.preventDefault()
            dispatch(moveLeft())
        } else if (event.code === 'Numpad6' || event.code === 'ArrowRight' || event.code === 'KeyD') {
            event.preventDefault()
            dispatch(moveRight())
        }  else if (event.code === 'Numpad8' || event.code === 'ArrowUp' || event.code === 'KeyW') {
            event.preventDefault()
            dispatch(rotate())
        }        
    }, [])

    return(
        <main className="Main">
            <PlayArea />
            <div className="Main__controls-panel">
                {/* <Stat score={state.score} record={state.record}/>        */}
                <Controls startGame={startGame} stopGame={stopGame} status={gameStatus}/>
                {/* <Queue gameData={state}/> */}
            </div>
        </main>
        )
}

export default Main;