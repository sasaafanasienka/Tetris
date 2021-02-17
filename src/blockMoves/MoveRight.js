import React, { useState, useEffect } from 'react';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveRight extends React.Component {

    move(scheme) {
        const newArea = dataTransform.schemeToArr(scheme)
        const oldArea = dataTransform.schemeToArr(scheme)
        for (let i = newArea.length; i >= 0; i--) {
            if (newArea[i] === 1) {
                if (i.toString().slice(-1) !== '9') {
                    newArea[i] = 0;
                    newArea[i + 1] = 1;
                } else {
                    return dataTransform.arrToScheme(oldArea)
                }
            }
        }
        return dataTransform.arrToScheme(newArea)
    }
}