import { ROTATE } from "../types";
import {store} from '../../index'

export const rotate = () => {
    const movingBrick = store.getState().brick

    const brick = movingBrick.brick
    const baseColumn = movingBrick.baseColumn
    const brickSize = brick.length

    let newBaseColumn = (baseColumn < 0) ? 0 :
                        (baseColumn > 10 - brickSize) ? 10  - brickSize :
                        baseColumn

    let rotatedBrick = []
    
    for ( let i = 0; i < brickSize; i++ ) {
        let newRow = []
        for ( let a = 0; a < brickSize; a++ ) {
            newRow.push(brick[brickSize - a - 1][i])
        }
        if (newRow.every((el) => { return el === 0 })) {
            rotatedBrick.unshift(newRow)
        } else {
            rotatedBrick.push(newRow)
        }
    }

    return {
        type: ROTATE,
        payload: {
            brick: rotatedBrick,
            baseLine: movingBrick.baseLine,
            baseColumn: newBaseColumn
        }
    }
}