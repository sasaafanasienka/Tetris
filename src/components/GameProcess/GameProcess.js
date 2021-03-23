import React, { useState, useEffect } from 'react';
import MoveDown from '../../blockMoves/MoveDown'
import youLose from '../../checks/youLose';
import fullRows from '../../checks/FullRows'
import addNewBrick from '../../gameEvents/addNewBrick'
import removeFullRows from '../../gameEvents/removeFullRows';

let moveDown = new MoveDown()

export default function gameProcess(current, stopGame, intervalID) {
    if (youLose(current.playField)) {
        console.log('youlose')
        stopGame()
        return current
    }
    if (fullRows(current.playField)) {
        return removeFullRows(current)
    } else if (current.movingBrick.length === 0) {
        return addNewBrick(current)
    } else {
        return moveDown.move(current)
    }
}