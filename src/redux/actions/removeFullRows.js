import { REMOVE_FULL_ROWS } from "../types"

export default function removeFullRows(playArea) {

    let fullRowsQuantity = 0
    let newplayArea = []

    for (let i = 0; i < 24; i++) {
        if (playArea[i].every((el) => { return el > 10 })) {
            fullRowsQuantity = fullRowsQuantity + 1
        } else {
            newplayArea.push(playArea[i])
        }
    }

    for (let i = 0; i < fullRowsQuantity; i++) {
        newplayArea.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }

    // const newScore = current.score + scoreTable[fullRowsQuantity]
    // let newRecord = current.record
    // if (newScore > current.record) {
    //     newRecord = newScore
    //     localStorage.setItem('record', newRecord)
    // }

    return {
        type: REMOVE_FULL_ROWS,
        payload: newplayArea,
    }
}