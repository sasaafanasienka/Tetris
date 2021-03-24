import React, { useState, useEffect, useCallback } from 'react';
import './Main.sass'
import '../../styles/button.sass'
import PlayArea from '../PlayArea/PlayArea'
import emptyField from '../../constants/emptyField'
import MoveDown from '../../blockMoves/MoveDown'
import MoveRight from '../../blockMoves/MoveRight'
import MoveLeft from '../../blockMoves/MoveLeft'
import Controls from '../Controls/Controls'
import Stat from '../Stat/Stat'
import Queue from '../Queue/Queue'
import gameProcess from '../GameProcess/GameProcess'
import Rotate from '../../blockMoves/Rotate';

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()
const rotate = new Rotate()

function Main() {

    const [state, setState ] = useState(
        {
            playField: emptyField(),
            movingBrick: [],
            baseLine: 3,
            baseColumn: 3,
            nextBrick: [],
            nextBaseColumn: 3,
            score: 0,
            record: localStorage.getItem('record'),
            bricksCount: 0
        }
    )

    const [ intervalID, setMoveInterval ] = useState()
    const [ gameStatus, setGameStatus ] = useState('stopped')

    function nextStep() {
        setState(state => gameProcess(state, stopGame, intervalID))
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
            setState(state => moveDown.move(state))
        } else if (event.code === 'Numpad4' || event.code === 'ArrowLeft' || event.code === 'KeyA') {
            event.preventDefault()
            setState(state => moveLeft.move(state))
        } else if (event.code === 'Numpad6' || event.code === 'ArrowRight' || event.code === 'KeyD') {
            event.preventDefault()
            setState(state => moveRight.move(state))
        }  else if (event.code === 'Numpad8' || event.code === 'ArrowUp' || event.code === 'KeyW') {
            event.preventDefault()
            setState(state => rotate.move(state))
        }        
    }, [])

    return(
        <main className="Main">
            <PlayArea gameData={state}/>
            <Stat score={state.score} record={state.record}/>       
            <Controls startGame={startGame} stopGame={stopGame} status={gameStatus}/>
            <Queue gameData={state}/>
        </main>
        )
}

export default Main;