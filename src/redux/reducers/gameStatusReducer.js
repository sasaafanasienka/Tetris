import { GAME_FINISH, GAME_PAUSE, GAME_START } from "../types"

const initialStatus = 'paused'

export const gameStatusReducer = (state = initialStatus, action) => {
    switch(action.type) {
        case GAME_START:
            return 'inProgress'
        case GAME_PAUSE:
            return 'paused'
        case GAME_FINISH:
            return 'finished'
        default:
            return state
    }
}