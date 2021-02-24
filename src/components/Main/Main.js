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
import GameProcess from '../GameProcess/GameProcess'
import Rotate from '../../blockMoves/Rotate';

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()
const rotate = new Rotate()
const gameProcess = new GameProcess()

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
            speed: 800
        }
    )
    const [ intervalID, setMoveInterval ] = useState()

    function nextStep() {
        setState(state => gameProcess.nextStep(state))
    }

    function startGame() {
        window.addEventListener('keydown', keyActions)
        setMoveInterval(
            setInterval(nextStep, state.speed)
            )
        }
        
    function stopGame() {
        window.removeEventListener('keydown', keyActions)
        clearInterval(intervalID)
    }

    const keyActions = useCallback((event) => { //хук useCallBack]
        if (event.code === 'Numpad5') {
            setState(state => moveDown.move(state))
        } else if (event.code === 'Numpad4') {
            setState(state => moveLeft.move(state))
        } else if (event.code === 'Numpad6') {
            setState(state => moveRight.move(state))
        }  else if (event.code === 'Numpad8') {
            setState(state => rotate.move(state))
        }       
    }, [])

    return(
        <main className="Main">
            <Stat score={state.score}/>
            <PlayArea gameData={state} />
            <div>
                <Controls startGame={startGame} stopGame={stopGame}/>
                <Queue gameData={state}/>
            </div>
        </main>
        )
}

export default Main;