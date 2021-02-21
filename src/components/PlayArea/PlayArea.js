import React from 'react';
import './PlayArea.sass'

function PlayArea(props) {

    function checkMovingBlocks() {
        return props.gameData.some((row) => {
            return row.includes(1)
        })
    }

    // if (!checkMovingBlocks()) {
    //     console.log(1)
    //     props.addNewBlock()
    // }

    function renderCells() {
        let cells = []
        for (let i = 40; i < 240; i++) {
            if (props.gameData[i] === 0) {
                cells.push(
                    <div className='PlayArea__cell' key={`${i}`}></div>
            )} else {
                cells.push(
                    <div className='PlayArea__cell_full' key={`${i}`}></div>
            )}
        }
        return cells
    }

    return(
        <div className="PlayArea">
            {renderCells()}
        </div>
        )
}

export default PlayArea;