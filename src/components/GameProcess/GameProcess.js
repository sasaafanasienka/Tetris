import React, { useState, useEffect } from 'react';
import MoveDown from '../../blockMoves/MoveDown'
import youLose from '../../checks/youLose';
import fullRows from '../../checks/fullRows'
import addNewBrick from '../../gameEvents/addNewBrick'
import removeFullRows from '../../gameEvents/removeFullRows';

let moveDown = new MoveDown()

export default class GameProcess extends React.Component {

    nextStep(current) {
        if (youLose(current.playField)) {
            console.log('you lose')
        }
        if (fullRows(current.playField)) {
            return removeFullRows(current)
        } else if (current.movingBrick.length === 0) {
            return addNewBrick(current)
        } else {
            return moveDown.move(current)
        }
    }
}