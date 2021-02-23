import blockExamples from '../constants/blockExamples'

function random(maxNumber) {
    let rand = Math.random() * (maxNumber + 1);
    return Math.floor(rand);
}

function rotate(brick) {

    let brickSize = brick.length
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
    return rotatedBrick
}

export default function randomBlock() {

    let newBrick = blockExamples[random(6)]
    const newBrickSize = newBrick.length
    for (let i = 0; i < random(3); i++ ) {
        newBrick = rotate(newBrick)
    }

    return {
        brick: newBrick,
        baseColumn: Math.ceil((10 - newBrickSize) / 2)
    }
}