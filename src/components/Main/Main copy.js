import React, { useState, useEffect, useCallback } from 'react';
import './Main.sass'
import '../../styles/button.sass'
import PlayArea from '../PlayArea/PlayArea'
import emptyField from '../../constants/emptyField'
import MoveDown from '../../blockMoves/MoveDown1'
import MoveRight from '../../blockMoves/MoveRight'
import MoveLeft from '../../blockMoves/MoveLeft'
import Controls from '../Controls/Controls'
import Stat from '../Stat/Stat'
import Queue from '../Queue/Queue'
import gameProcess from '../GameProcess/GameProcess'
import Rotate from '../../blockMoves/Rotate';
import { useSelector } from 'react-redux';
import freePlaceToMove from '../../checks/freePlaceToMove';
import { store } from '../../index';
import { moveDown } from '../../redux/actions/moveDown';
import { useDispatch } from 'react-redux';

function Main() {

    const state = useSelector(state => {return state})
    const dispatch = useDispatch()

    // const [state, setState ] = useState(
    //     {
    //         playField: emptyField(),
    //         movingBrick: [],
    //         baseLine: 3,
    //         baseColumn: 3,
    //         nextBrick: [],
    //         nextBaseColumn: 3,
    //         score: 0,
    //         record: localStorage.getItem('record'),
    //         bricksCount: 0
    //     }
    // )

    const [ intervalID, setMoveInterval ] = useState()
    const [ gameStatus, setGameStatus ] = useState('stopped')

    function nextStep() {
        gameProcess()
        // setState(state => gameProcess(state, stopGame, intervalID))
    }

    function startGame() {
        window.addEventListener('keydown', keyActions)
        setMoveInterval(
            setInterval(nextStep, 1000)
            )
        }
        
    function stopGame() {
        window.removeEventListener('keydown', keyActions)
        clearInterval(intervalID)
    }

    const keyActions = useCallback((event) => { //хук useCallBack]
        console.log(event)
        if (event.code === 'Numpad5' || event.code === 'ArrowDown' || event.code === 'KeyS') {
            event.preventDefault()
            if (freePlaceToMove('down')) { store.dispatch(moveDown) }
        } else if (event.code === 'Numpad4' || event.code === 'ArrowLeft' || event.code === 'KeyA') {
            event.preventDefault()
        } else if (event.code === 'Numpad6' || event.code === 'ArrowRight' || event.code === 'KeyD') {
            event.preventDefault()
        }  else if (event.code === 'Numpad8' || event.code === 'ArrowUp' || event.code === 'KeyW') {
            event.preventDefault()
        }        
    }, [])

    return(
        <main className="Main">
            <PlayArea gameData={state}/>
            <div className="Main__controls-panel">
                {/* <Stat score={state.score} record={state.record}/>        */}
                <Controls startGame={startGame} stopGame={stopGame} status={gameStatus}/>
                {/* <Queue gameData={state}/> */}
            </div>
        </main>
        )
}

export default Main;