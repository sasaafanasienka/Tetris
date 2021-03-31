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

export default function randomBrick() {

    let newBrick = blockExamples[random(6)] //сперва генерируем рандомно одну из 7 фигур
    for (let i = 0; i < random(3); i++ ) { //потом рандомно крутим фигуру от 0 до 3 раз
        newBrick = rotate(newBrick)
    }
    const newBrickSize = newBrick.length

    return {
        brick: newBrick,
        baseLine: 3,
        baseColumn: Math.ceil((10 - newBrickSize) / 2)
    }
}