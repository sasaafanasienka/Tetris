import { store } from '../../index'
import { addNewBrick } from '../../redux/actions/addNewBrick'
import { addNewBrickFromNext } from '../../redux/actions/addNewBrickFromNext'
import { moveDown } from '../../redux/actions/moveDown'
import { mountBrick } from '../../redux/actions/mountBrick';
import freePlaceToMove from '../../checks/freePlaceToMove';
import removeFullRows from '../../redux/actions/removeFullRows';
import { generateNextBrick } from '../../redux/actions/generateNextBrick';
import { updateScore } from '../../redux/actions/updateScore';
import { countRows } from '../../redux/actions/countRows';
import { GAME_FINISH } from '../../redux/types';

export default function nextStep() {
    const playArea = store.getState().playArea
    const brick = store.getState().brick
    const nextBrick = store.getState().nextBrick
    const score = store.getState().score.score
    const record = store.getState().score.record
    const levelObj = store.getState().level

    const fullRowsQuantity = playArea.filter(elem => elem.every((el) => { return el > 10 })).length

    // Проверка на проигрыш
    if (playArea.slice(0,4).some(elem => {return elem.some(el => {return el !== 0})})) { 
        store.dispatch({type: GAME_FINISH})
        return
    }

    // Проверка есть ли движущийся кирпич в данный момент
    if (brick.brick.length === 0) {
        store.dispatch(addNewBrick())
        store.dispatch(generateNextBrick())
        return
    } 
    
    // Проверка, есть ли заполненные ряды
    if (fullRowsQuantity > 0) {
        store.dispatch(removeFullRows(playArea, fullRowsQuantity))
        store.dispatch(updateScore(fullRowsQuantity, score, record))
        store.dispatch(countRows(fullRowsQuantity, levelObj))
    } else {
        if (freePlaceToMove('down', playArea, brick.brick, brick.baseLine + 1, brick.baseColumn)) {
            store.dispatch(moveDown())
        } else {
            store.dispatch(mountBrick(playArea, brick))
            if (nextBrick.brick.length === 0) {
                store.dispatch(addNewBrick())
                store.dispatch(generateNextBrick())
            } else {
                store.dispatch(addNewBrickFromNext(nextBrick))
                store.dispatch(generateNextBrick())
            }
        }
    }
}