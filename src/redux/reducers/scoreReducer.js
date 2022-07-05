import { UPDATE_SCORE, CLEAR_SCORE, START_ANIMATION } from "../types"

const initialScore = {
    score: 0,
    animation: '',
    animationValue: 5,
    record: localStorage.getItem('record') ? localStorage.getItem('record') : 0,
}

export const scoreReducer = (state = initialScore, action) => {
    switch(action.type) {
        case UPDATE_SCORE:
            return {...state, ...action.payload}
        case START_ANIMATION:
            return { ...state, ...action.payload }
        case CLEAR_SCORE:
            return initialScore
        default:
            return state
    }
}