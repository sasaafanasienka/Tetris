import React, { useState, useEffect } from 'react';
import './Main.sass'
import PlayArea from '../PlayArea/PlayArea'
import emptyArea from '../../constants/emptyArea'
import newBlock from '../../gameEvents/blockGen'
import MoveDown from '../../blockMoves/MoveDown'
import MoveRight from '../../blockMoves/MoveRight'
import MoveLeft from '../../blockMoves/MoveLeft'

const moveDown = new MoveDown()
const moveRight = new MoveRight()
const moveLeft = new MoveLeft()

function Main() {

    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        document.addEventListener("keypress", changeOnArea);
        return () => {
        document.removeEventListener("keypress", changeOnArea);
        }
    })

    const firstArea = newBlock(emptyArea)
    const [ area, changeArea ] = useState(firstArea)

    useEffect(() => {
        const interval = setInterval(() => {
            changeArea(area => moveDown.move(area));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  
    function changeOnArea(event) {
        if (event.code === 'Numpad5') {
            changeArea(moveDown.move(area))
        } else if (event.code === 'Numpad4') {
            changeArea(moveLeft.move(area))
        } else if (event.code === 'Numpad6') {
            changeArea(moveRight.move(area))
        }
    }

    return(
        <main className="Main" onKeyPress={changeOnArea}>
        {/* <main className="Main"> */}
            <PlayArea gameData={area}/>
        </main>
        )
}

export default Main;