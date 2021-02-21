import React, { useState, useEffect } from 'react';
import './Main.sass'
import '../../styles/button.sass'
import PlayArea from '../PlayArea/PlayArea'
import emptyArea from '../../constants/emptyArea'
import testArea from '../../constants/testArea'
import addRandomBlock from '../../gameEvents/addRandomBlock'
import MoveDown from '../../blockMoves/MoveDown'
import MoveRight from '../../blockMoves/MoveRight'
import MoveLeft from '../../blockMoves/MoveLeft'
import Controls from '../Controls/Controls'
import Stat from '../Stat/Stat'
import MovingBlock from '../../checks/Movingblock';
import GameProcess from '../GameProcess/GameProcess'
import Rotate from '../../blockMoves/Rotate';

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()
const movingBlock = new MovingBlock()
const rotate = new Rotate()
const gameProcess = new GameProcess()

function Main() {

    const [ area, setArea ] = useState(area => emptyArea())
    const [ score, setScore ] = useState(0)
    const [ speed, setSpeed ] = useState(300)
    const [ moveInterval, setMoveInterval ] = useState()

    function nextStep() {
        setArea(area => gameProcess.nextStep(area))
    }

    function startGame() {
        document.addEventListener('keypress', keyActions)
        setMoveInterval(
            setInterval(nextStep, speed)
        )
    }

    function stopGame() {
        document.removeEventListener('keypress', keyActions)
        clearInterval(moveInterval)
    }

    function keyActions(event) {
        if (event.code === 'Numpad5') {
            setArea(area => moveDown.move(area))
        } else if (event.code === 'Numpad4') {
            setArea(area => moveLeft.move(area))
        } else if (event.code === 'Numpad6') {
            setArea(area => moveRight.move(area))
        } else if (event.code === 'Numpad8') {
            setArea(area => rotate.move(area))
        }       
    }

    return(
        <main className="Main">
            <Stat score={score}/>
            <PlayArea gameData={area} />
            <Controls startGame={startGame} stopGame={stopGame}/>
        </main>
        )
}

export default Main;