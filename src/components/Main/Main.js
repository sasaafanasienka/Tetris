import React, { useState, useEffect } from 'react';
import './Main.sass'
import PlayArea from '../PlayArea/PlayArea'
import emptyArea from '../../constants/emptyArea'
import newBlock from '../../gameEvents/blockGen'
import Move from '../../userEvents/Move'

const move = new Move()

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
            changeArea(area => move.down(area));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  
    function changeOnArea(event) {
        if (event.code === 'Numpad5') {
            changeArea(move.down(area))
        } else if (event.code === 'Numpad4') {
            changeArea(move.left(area))
        } else if (event.code === 'Numpad6') {
            changeArea(move.right(area))
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