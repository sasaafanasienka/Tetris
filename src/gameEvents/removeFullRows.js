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
    for (let i = 0; i < fullRowsQuantity; i++) {
        newPlayField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
    console.log(newPlayField)

    const newScore = current.score + scoreTable[fullRowsQuantity]
    let newRecord = current.record
    if (newScore > current.record) {
        newRecord = newScore
        localStorage.setItem('record', newRecord)
    }

    return {
        playField: newPlayField,
        movingBrick: movingBrick,
        baseLine: baseLine,
        baseColumn: baseColumn,
        nextBrick: current.nextBrick,
        nextBaseColumn: current.nextBaseColumn,
        score: newScore,
        record: newRecord,
        speed: current.speed,
    }
}