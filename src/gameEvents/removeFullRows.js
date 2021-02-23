import scoreTable from '../constants/scoreTable'

export default function removeFullRows(current) {
    const playField = current.playField
    const movingBrick = current.movingBrick
    const baseLine = current.baseLine
    const baseColumn = current.baseColumn

    let fullRowsQuantity = 0
    let newPlayField = []

    for (let i = 0; i < 24; i++) {
        if (playField[i].some((el) => { return el !== 2 })) {
            newPlayField.push(playField[i])
        } else {
            fullRowsQuantity = fullRowsQuantity + 1
        }
    }
    console.log(newPlayField)
    for (let i = 0; i <= 24 - newPlayField.length; i++) {
        newPlayField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
    console.log(newPlayField)
    return {
        playField: newPlayField,
        movingBrick: movingBrick,
        baseLine: baseLine,
        baseColumn: baseColumn,
        score: current.score + scoreTable[fullRowsQuantity],
        speed: current.speed - 2
    }
}