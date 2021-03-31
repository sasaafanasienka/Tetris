import React, { useState, useEffect } from 'react';
import youLose from '../../checks/youLose';
import fullRows from '../../checks/FullRows'
// import addNewBrick from '../../gameEvents/addNewBrick'
import removeFullRows from '../../gameEvents/removeFullRows';
import { useStore } from 'react-redux';
import { store } from '../../index'
import { addNewBrick } from '../../redux/actions/addNewBrick'
import { removeBrick } from '../../redux/actions/removeBrick'
import { moveDown } from '../../redux/actions/moveDown'
import { mountBrick } from '../../redux/actions/mountBrick';
import freePlaceToMove from '../../checks/freePlaceToMove';

export default function gameProcess() {
    const playArea = store.getState().playArea
    const brick = store.getState().brick
    console.log(brick)
    console.log(playArea)

    if (brick.brick.length === 0) { //Если на поле нет движущегося кирпича
        store.dispatch(addNewBrick())
    } else {
        if (freePlaceToMove('down', playArea, brick.brick, brick.baseLine + 1, brick.baseColumn)) {
            console.log('try to move')
            store.dispatch(moveDown())
        } else {
            console.log('try to mount')
            store.dispatch(mountBrick(playArea, brick))
            store.dispatch(removeBrick())
        }
    }
}