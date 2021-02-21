import React, { useState, useEffect } from 'react';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveLeft extends React.Component {

    move(currentArea) {
        const newArea = []
        let stoppedBlocks = currentArea.map((el) => {
            return el === 2 ? el = 2 : el = 0
        })
        let movingBlocks = currentArea.map((el) => {
            return el === 1 ? el = 1 : el = 0
        })
        for (let i = 239; i >= 0; i--) {
            if (movingBlocks[i] === 1) {
                if (i.toString().slice(-1) !== '9') {
                    movingBlocks[i] = 0;
                    movingBlocks[i + 1] = 1;
                } else {
                    return currentArea
                }
            }
        }
        for (let i = 0; i < 240; i++) {
            const sum = stoppedBlocks[i] + movingBlocks[i]
            if (sum <= 2) {
                newArea.push(sum)
            } else {
                return currentArea
            }
        }

        return newArea
    }
}