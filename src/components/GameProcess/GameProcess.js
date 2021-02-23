import React, { useState, useEffect } from 'react';
// import addNewBlock from '../gameEvents/addNewBlock';
import MoveDown from '../../blockMoves/MoveDown'
import youLose from '../../checks/youLose';
import fullRows from '../../checks/fullRows'
import removeFullRows from '../../gameEvents/removeFullRows';

let moveDown = new MoveDown()

export default class GameProcess extends React.Component {

    nextStep(current) {
        if (youLose(current.playField)) {
            console.log('you lose')
        }
        if (fullRows(current.playField)) {
            return removeFullRows(current)
        } else {
            return moveDown.move(current)
        }
    }
}