export default function freePlaceToMove( playField, movingBrick, baseLine, baseColumn, brickSize ) {

    for (let i = 0; i < brickSize; i++ ) {
        for ( let a = 0; a < brickSize; a++ ) {
            if ([1,2,3,4,5,6,7].includes(movingBrick[i][a]) && [11,12,13,14,15,16,17].includes(playField[i + baseLine - brickSize + 1][a + baseColumn])) {  
                //было - длина стороны
                return false
            }
        }
    }
    return true
}