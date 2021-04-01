import {store} from '../../index' 
import nextStep from './nextStep'

export function autoStep() {

    const gameStatus = store.getState().gameStatus

    if (gameStatus === 'paused') { 
        return
    }

    const speed = store.getState().level.speed

    nextStep()
    if (gameStatus === 'inProgress') {
        setTimeout(autoStep, speed)
    }
}