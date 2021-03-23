import React, { useState, useEffect } from 'react';
import freePlaceToMove from '../checks/freePlaceToMove';

export default class MoveLeft extends React.Component {

    doNotMove(current) {
        return current
    }

    move(current) {

        const playField = current.playField
        const movingBrick = current.movingBrick
        const baseLine = current.baseLine
        const baseColumn = current.baseColumn + 1
        const brickSize = current.movingBrick.length

        if (baseColumn + brickSize > 10) { 
            for (let i = 0; i < brickSize; i++) {
                for (let a = brickSize - 1; a > 9 - baseColumn; a--) {
                    if ([1,2,3,4,5,6,7].includes(movingBrick[i][a])) {
                        return this.doNotMove(current) 
                    }
                }
            }
        }
        
        if (freePlaceToMove( playField, movingBrick, baseLine, baseColumn, brickSize ) === false) {
            return this.doNotMove(current)
        }

        return {
            playField: playField,
            movingBrick: movingBrick,
            baseLine: baseLine,
            baseColumn: baseColumn,
            nextBrick: current.nextBrick,
            nextBaseColumn: current.nextBaseColumn,
            score: current.score,
            record: current.record,
            bricksCount: current.bricksCount,        }
    }
}