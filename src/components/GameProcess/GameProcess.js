import React, { useState, useEffect } from 'react';
// import addNewBlock from '../gameEvents/addNewBlock';
import MovingBlock from '../../checks/Movingblock'
import addRandomBlock from '../../gameEvents/addRandomBlock';
import MoveDown from '../../blockMoves/MoveDown'
import FullRows from '../../checks/FullRows'
import removeFullRows from '../../gameEvents/removeFullRows';

let movingBlock = new MovingBlock()
let moveDown = new MoveDown()
let fullRows = new FullRows()


export default class GameProcess extends React.Component {

    nextStep(currentArea) {
        if (fullRows.check(currentArea)) {
            console.log('try to remove full rows')
            return removeFullRows(currentArea)
        }
        if (!currentArea.includes(1)) {
            return addRandomBlock(currentArea)
        } else {
            return moveDown.move(currentArea)
        }
    }
}