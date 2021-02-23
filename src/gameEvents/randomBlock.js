import blockExamples from '../constants/blockExamples'

function random() {
    const blocksQuantity = 18
    let rand = Math.random() * (blocksQuantity + 1);
    return Math.floor(rand);
}

export default function randomBlock(currentArea) {
    const newBlock = blockExamples[random()]
    const newBlockSize = newBlock.length
    return {
        brick: newBlock,
        baseColumn: Math.ceil((10 - newBlockSize) / 2)
    }
}