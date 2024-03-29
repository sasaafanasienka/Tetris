import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors'
import './Queue.sass'

function Queue() {

    const nextBrick = useSelector(state => {return state.nextBrick.brick})
   
    function compileDataToArr() { 
        let dataArray = []
        for ( let i = 0; i < 4; i++) {
            for (let a = 0; a < 4; a++) {
                if (!nextBrick[i] || !nextBrick[i][a]) {
                    dataArray.push(0)
                } else {
                    dataArray.push(nextBrick[i][a])
                }
            }
        }
        return dataArray
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
                    <div className={`Queue__cell_${colors[data[i]]}`} key={`${i}`}></div>
            )}
        }
        return cells
    }

    return(
        <div className='Queue'>
            <p className='Queue__title'>NEXT:</p>
            <div className='Queue__item'>
                {renderCells()}
            </div>
        </div>
        )
}

export default Queue;