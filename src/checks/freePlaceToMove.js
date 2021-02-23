export default function freePlaceToMove( playField, movingBrick, baseLine, baseColumn, brickSize ) {

    for (let i = 0; i < brickSize; i++ ) {
        for ( let a = 0; a < brickSize; a++ ) {
            if (movingBrick[i][a] === 1 && playField[i + baseLine - brickSize + 1][a + baseColumn] === 2) {  //было - длина стороны
                return false
            }
        }
    }
    return true
}