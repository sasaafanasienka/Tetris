import React, { useState, useEffect } from 'react';
// import addNewBlock from '../gameEvents/addNewBlock';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveDown extends React.Component {

    stopBlock(currentArea) {
        let newArea = []
        for (let i = 0; i < 240; i++) {
            if (currentArea[i] === 1) {
                newArea.push(2)
            } else {
                newArea.push(currentArea[i])
            }
        }
        return newArea
    }

    move(currentArea) {
        let newArea = []
        let stoppedBlocks = currentArea.map((el) => {
            return el === 2 ? el = 2 : el = 0
        })
        let movingBlocks = currentArea.map((el) => {
            return el === 1 ? el = 1 : el = 0
        })
        if (movingBlocks.slice(-10).includes(1)) {
            return this.stopBlock(currentArea)
        } else {
            movingBlocks.splice(230)
            movingBlocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].concat(movingBlocks)
        }
        for (let i = 0; i < 240; i++) {
            const sum = stoppedBlocks[i] + movingBlocks[i]
            if (sum <= 2) {
                newArea.push(sum)
            } else {
                return this.stopBlock(currentArea)
            }
        }
        return newArea
    }
}