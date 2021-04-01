import { UPDATE_SCORE } from "../types";

export const updateScore = (rows, score, record) => {

    const scoreTable = [0, 5, 10, 20, 40]
    const increase = scoreTable[rows]
    const newScore = score + increase
    let newRecord = record
    if (newScore > record) {
        newRecord = newScore
        localStorage.setItem('record', newRecord)
    }

    return {
        type: UPDATE_SCORE,
        payload: {
            score: newScore,
            record: newRecord
        }
    }
}