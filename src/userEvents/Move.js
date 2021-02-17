import React, { useState, useEffect } from 'react';
// import './Main.sass'

export default class Move extends React.Component {

    // constructor() {
    //     this.state = {
    //         area: this.area,
    //     }
    // }
    transformSchemeToArr(scheme) {
        let newArea = []
        for (let i = 0; i < 20; i++) {
            for (let a = 0; a < 10; a++) {
                newArea.push(scheme[i][a])
            }
        }
        return newArea
    }

    transFormArrToSCheme(arr) {
        let newArea = []
        for (let i = 0; i < 20; i++) {
            let row = []
            for (let a = 0; a < 10; a++) {
                row.push(arr[a + i * 10])
            }
            newArea.push(row)
        }
        return newArea
    }

    down(scheme) {
        const newArea = this.transformSchemeToArr(scheme)
        const oldArea = this.transformSchemeToArr(scheme)
        for (let i = newArea.length; i >= 0; i--) {
            if (newArea[i] === 1) {
                if (i + 10 < 200 || newArea[i + 10] === 0) {
                    newArea[i] = 0;
                    newArea[i + 10] = 1;
                } else {
                    return this.transFormArrToSCheme(oldArea)
                }
            }
        }
        return this.transFormArrToSCheme(newArea)
    }

    right(scheme) {
        const newArea = this.transformSchemeToArr(scheme)
        const oldArea = this.transformSchemeToArr(scheme)
        for (let i = newArea.length; i >= 0; i--) {
            if (newArea[i] === 1) {
                if (i.toString().slice(-1) !== '9') {
                    newArea[i] = 0;
                    newArea[i + 1] = 1;
                } else {
                    return this.transFormArrToSCheme(oldArea)
                }
            }
        }
        return this.transFormArrToSCheme(newArea)
    }

    left(scheme) {
        const newArea = this.transformSchemeToArr(scheme)
        const oldArea = this.transformSchemeToArr(scheme)
        for (let i = 0; i < newArea.length; i++) {
            if (newArea[i] === 1) {
                if (i.toString().slice(-1) !== '0') {
                    newArea[i] = 0;
                    newArea[i - 1] = 1;
                } else {
                    return this.transFormArrToSCheme(oldArea)
                }
            }
        }
        return this.transFormArrToSCheme(newArea)
    }


}