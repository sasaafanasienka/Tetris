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
    const state = store.getState()
    // console.log(state)
    if (state.brick.brick.length === 0) { //Если на поле нет движущегося кирпича
        store.dispatch(addNewBrick())
    } else {
        if (state.brick.baseLine < 23 && freePlaceToMove('down')) {
            store.dispatch(moveDown())
        } else {
            store.dispatch(mountBrick(state.playArea, state.brick))
            store.dispatch(removeBrick())
        }
    }
}