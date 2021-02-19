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
// import isThereAMovingBlock from '../../gameEvents/isThereAMovingBlock';

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()

function Main() {

    const [ area, setArea ] = useState(emptyArea)
    const [ score, setScore ] = useState(0)
    const [ speed, setSpeed ] = useState(200)
    const [ moveInterval, setMoveInterval ] = useState()

    function fallingBlock() {
        setArea(area => moveDown.move(area))
    }

    function addNewBlock() {
        setArea(area => addRandomBlock(area))
    }

    function startGame() {
        setArea(area => addRandomBlock(area))
        setMoveInterval(
            setInterval(fallingBlock, speed)
        )
        // setInterval(blockMove)

        // newPromise
        //     .then(function(value) {
        //         setArea(value)
        //     })
        //     .catch(function(value) {
        //         setArea(value)
        //     })
        // const newArea = addNewBlock(area)
        // console.log(newArea)
        // setArea(newArea)
        // setArea(addNewBlock(area))
        // setScore(500)
        // document.addEventListener("keypress", pressButton)
        // interval = setInterval(() => {
        //     changeArea(area => moveDown.move1(area));
        // }, 1000);
    }
  
    // function pressButton(event) {
    //     if (event.code === 'Numpad5') {
    //         changeArea(moveDown.move1(area))
    //     } else if (event.code === 'Numpad4') {
    //         changeArea(moveLeft.move(area))
    //     } else if (event.code === 'Numpad6') {
    //         changeArea(moveRight.move(area))
    //     } else if (event.code === 'Numpad1') {
    //         changeArea(addNewBlock(emptyArea))
    //     }
    // }

    return(
        <main className="Main">
            <Stat score={score}/>
            <PlayArea gameData={area} addNewBlock={addNewBlock}/>
            <Controls startGame={startGame}/>
        </main>
        )
}

export default Main;