import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stat.sass'

function Stat() {

    const currentScore = useSelector(state => {return state.score.score})
    const score = useSelector(state => {return state.score})
    const currentRecord = useSelector(state => {return state.score.record})
    const currentLevel = useSelector(state => { return state.level.level })
    const rows = useSelector(state => { return state.level.rows })

    console.log(rows)

    const getProgress = () => {
        return `${(rows % 15) / 15 * 100}%`
        // return `linear-gradient(90deg, ` +
        //     `rgba(255,238,0,1) 0%, ` +
        //     `rgba(255,238,0,1) ${percent}%, ` +
        //     `rgba(255,238,0,0) ${percent}%, ` +
        //     `rgba(255,238,0,0) 100%)`
    }
    
    return(
        <div className='Stat'>
            <p className='Stat__title'>SCORE:</p>
            <p className='Stat__score'>
                <span className={`Stat__score-value ${score.animation}`}>{currentScore}</span>
                <span className={`Stat__animate-plus ${score.animation}`}> + </span>
                <span className={`Stat__animate ${score.animation}`}>{score.animationValue}</span>
            </p>
            <p className='Stat__title'>BEST:</p>
            <p className='Stat__score'>{currentRecord}</p>
            <p className='Stat__title'>SPEED:</p>
            <p className='Stat__score'>{currentLevel}</p>
            <p className='Stat__title'>NEXT LEVEL:</p>
            <div className='Stat__next-level-container'>
                <div className='Stat__next-level-progress' style={{width: getProgress()}}></div>
            </div>
        </div>
        )
}

export default Stat;