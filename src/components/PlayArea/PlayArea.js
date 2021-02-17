import React from 'react';
import './PlayArea.sass'

function PlayArea(props) {

    function renderCells() {
        let cells = []
        for (let i = 0; i < 20; i++) {
            for (let a = 0; a < 10; a++) {
                if (props.gameData[i][a] === 0) {
                    cells.push(
                        <div className='PlayArea__cell' key={`${i}${a}`}></div>
                )} else {
                    cells.push(
                        <div className='PlayArea__cell_full' key={`${i}${a}`}></div>
                )}
            }
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