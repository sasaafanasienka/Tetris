import React, { useState, useEffect } from 'react';
import youLose from '../../checks/youLose';
// import addNewBrick from '../../gameEvents/addNewBrick'
import { useStore } from 'react-redux';
import { store } from '../../index'
import { addNewBrick } from '../../redux/actions/addNewBrick'
import { addNewBrickFromNext } from '../../redux/actions/addNewBrickFromNext'
import { removeBrick } from '../../redux/actions/removeBrick'
import { moveDown } from '../../redux/actions/moveDown'
import { mountBrick } from '../../redux/actions/mountBrick';
import freePlaceToMove from '../../checks/freePlaceToMove';
import removeFullRows from '../../redux/actions/removeFullRows';
import { generateNextBrick } from '../../redux/actions/generateNextBrick';
import { updateScore } from '../../redux/actions/updateScore';

export default function gameProcess() {
    const playArea = store.getState().playArea
    const brick = store.getState().brick
    const nextBrick = store.getState().nextBrick
    const score = store.getState().score.score
    const record = store.getState().score.record
    // console.log(brick)
    // console.log(nextBrick)
    // console.log(playArea)
    const fullRowsQuantity = playArea.filter(elem => elem.every((el) => { return el > 10 })).length
    if (fullRowsQuantity > 0) {
        store.dispatch(removeFullRows(playArea, fullRowsQuantity))
        store.dispatch(updateScore(fullRowsQuantity, score, record))
    } else if (brick.brick.length === 0) {
        if (nextBrick.brick.length === 0) {
            store.dispatch(addNewBrick())
            store.dispatch(generateNextBrick())
        } else {
            store.dispatch(addNewBrickFromNext(nextBrick))
            store.dispatch(generateNextBrick())
        }
    } else {
        if (freePlaceToMove('down', playArea, brick.brick, brick.baseLine + 1, brick.baseColumn)) {
            store.dispatch(moveDown())
        } else {
            store.dispatch(mountBrick(playArea, brick))
            store.dispatch(removeBrick())
        }
    }
}