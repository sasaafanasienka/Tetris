import React, { useState, useEffect } from 'react';
import freePlaceToMove from '../checks/freePlaceToMove';

export default class Rotate extends React.Component {

    move(current) {
        const playField = current.playField
        const movingBrick = current.movingBrick
        const baseLine = current.baseLine
        const baseColumn = current.baseColumn
        const brickSize = current.movingBrick.length

        let newBaseColumn = baseColumn
        if (baseColumn < 0) {
            newBaseColumn = 0
        } else if (baseColumn > 10 - brickSize) {
            newBaseColumn = 10  - brickSize
        }

        let rotatedBrick = []
        
        for ( let i = 0; i < brickSize; i++ ) {
            let newRow = []
            for ( let a = 0; a < brickSize; a++ ) {
                newRow.push(movingBrick[brickSize - a - 1][i])
            }
            if (newRow.every((el) => { return el === 0 })) {
                rotatedBrick.unshift(newRow)
            } else {
                rotatedBrick.push(newRow)
            }
        }

        if (freePlaceToMove( playField, rotatedBrick, baseLine, baseColumn, brickSize ) === false) {
            return current
        }

        return {
            playField: playField,
            movingBrick: rotatedBrick,
            baseLine: baseLine,
            baseColumn: newBaseColumn,
            score: current.score,
            speed: current.speed
        }
    }
}