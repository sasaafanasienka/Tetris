import React, { useState, useEffect } from 'react';
// import './Main.sass'

export default class DataTransform extends React.Component {

    schemeToArr(scheme) {
        let newArea = []
        for (let i = 0; i < 24; i++) {
            for (let a = 0; a < 10; a++) {
                newArea.push(scheme[i][a])
        }}
        return newArea
    }

    arrToScheme(arr) {
        let newArea = []
        for (let i = 0; i < 24; i++) {
            let row = []
            for (let a = 0; a < 10; a++) {
                row.push(arr[a + i * 10])
            }
            newArea.push(row)
        }
        return newArea
    }
}