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

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()
const movingBlock = new MovingBlock()

function Main() {

    const [ area, setArea ] = useState(area => emptyArea)
    const [ score, setScore ] = useState(0)
    const [ speed, setSpeed ] = useState(200)
    const [ moveInterval, setMoveInterval ] = useState()

    function gameProcess() {
        setArea(area => moveDown.move(area))
    }

    function addNewBlock() {
        setArea(area => addRandomBlock(area))
    }
    
    function startGame() {
        addNewBlock()
        setMoveInterval(
            setInterval(gameProcess, speed)
        )
    }

    return(
        <main className="Main">
            <Stat score={score}/>
            <PlayArea gameData={area} addNewBlock={addNewBlock}/>
            <Controls startGame={startGame}/>
        </main>
        )
}

export default Main;