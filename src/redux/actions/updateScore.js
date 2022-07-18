import { START_ANIMATION, UPDATE_SCORE } from "../types";

export const asyncUpdateScore = (rows, score, record) => {

    console.log(score, record)

    const scoreTable = [0, 5, 10, 20, 40]
    const increase = scoreTable[rows]
    const recordIncrease = record - (score + increase) > 0 ? 0 : (score + increase) - record

    console.log(increase, recordIncrease)

    return dispatch => {
        dispatch(startAnimation(increase, recordIncrease))
        setTimeout(() => {
            dispatch(updateScore(increase, score, record))
        }, 1000)
    }

}

export const updateScore = (increase, score, record) => {
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
            record: newRecord,
            scoreAnimation: '',
            recordAnimation: ''
        }
    }
}

export const startAnimation = (increase, recordIncrease) => {
    return {
        type: START_ANIMATION,
        payload: {
            scorePlus: increase,
            scoreAnimation: 'active',
            recordPlus: recordIncrease,
            recordAnimation: recordIncrease > 0 ? 'active' : ''
        }
    }
}