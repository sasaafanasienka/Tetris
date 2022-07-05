import { START_ANIMATION, UPDATE_SCORE } from "../types";

export const asyncUpdateScore = (rows, score, record) => {
    const scoreTable = [0, 5, 10, 20, 40]
    const increase = scoreTable[rows]

    console.log(increase)

    return dispatch => {
        dispatch(startAnimation(increase))
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
            animation: ''
        }
    }
}

export const startAnimation = (value) => {
    return {
        type: START_ANIMATION,
        payload: {
            animation: 'active',
            animationValue: value
        }
    }
}