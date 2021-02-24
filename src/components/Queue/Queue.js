import React, { useState, useEffect } from 'react';
import './Queue.sass'

function Queue(props) {

    const playField = props.gameData.playField
    const movingBrick = props.gameData.movingBrick
    const baseLine = props.gameData.baseLine
    const baseColumn = props.gameData.baseColumn
    const brickSideLength = props.gameData.movingBrick.length

    function compileDataToArr() { 
        let dataArray = []
        for ( let i = 0; i < 4; i++) {
            for (let a = 0; a < 4; a++) {
                console.log(i)
                console.log(a)
                if (!movingBrick[i] || !movingBrick[i][a]) {
                    dataArray.push(0)
                } else {
                    dataArray.push(movingBrick[i][a])
                }
            }
        }
        return dataArray
        // return [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0]
    }

    function renderCells() {
        let cells = []
        let data = compileDataToArr()
        for (let i = 0; i < 16; i++) {
            if (data[i] === 0 || data[i] === undefined) {
                cells.push(
                    <div className='Queue__cell' key={`${i}`}></div>
            )} else {
                cells.push(
                    <div className='Queue__cell_full' key={`${i}`}></div>
            )}
        }
        return cells
    }

    return(
        <div className='Queue'>
            <p className='Queue__title'>CURRENT:</p>
            <div className='Queue__item'>
                {renderCells()}
            </div>
            {/* <div className='Queue__item'>

            </div> */}
        </div>
        )
}

export default Queue;