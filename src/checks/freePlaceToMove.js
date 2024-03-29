import { store } from '../index'

export default function freePlaceToMove( direction, playArea, brick, baseLine, baseColumn ) {

    const brickSize = brick.length

    if (direction === 'down' && baseLine >= 24) { return false }

    if ( direction === 'left' ) {
        if (baseColumn < 0) {
            for (let i = 0; i < brickSize; i++) {
                for (let a = 0; a < baseColumn * -1; a++) {
                    if ([1,2,3,4,5,6,7].includes(brick[i][a])) {
                        return false 
                    }
                }
            }
        }
    }

    if ( direction === 'right' ) {
        if (baseColumn + brickSize > 10) { 
            for (let i = 0; i < brickSize; i++) {
                for (let a = brickSize - 1; a > 9 - baseColumn; a--) {
                    if ([1,2,3,4,5,6,7].includes(brick[i][a])) {
                        return false
                    }
                }
            }
        }
    }

    for (let i = 0; i < brickSize; i++ ) {
        for ( let a = 0; a < brickSize; a++ ) {
            if ([1,2,3,4,5,6,7].includes(brick[i][a]) && [11,12,13,14,15,16,17].includes(playArea[i + baseLine - brickSize + 1][a + baseColumn])) {  
                return false
            }
        }
    }

    return true
}