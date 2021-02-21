import blockExamples from '../constants/blockExamples'
import testArea from '../constants/testArea'

function random() {
    const blocksQuantity = 18
    let rand = Math.random() * (blocksQuantity + 1);
    return Math.floor(rand);
}

export default function addRandomBlock(currentArea) {
    const newBlock = blockExamples[random()]
    let newArea = []
    for (let i = 0; i < 240; i++) {
        if (i < 40) {
            newArea.push(newBlock[i])
        } else {
            newArea.push(currentArea[i])
        }
    }
    console.log(newArea)
    return newArea
}