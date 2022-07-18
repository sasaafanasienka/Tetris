import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stat.sass'

function Stat() {

    const {
        score,
        record,
        scorePlus,
        recordPlus,
        scoreAnimation,
        recordAnimation
    } = useSelector(state => { return state.score })
    const { level, rows } = useSelector(state => { return state.level })

    const getProgress = () => {
        return `${(rows % 15) / 15 * 100}%`
    }
    
    return(
        <div className='Stat'>
            <p className='Stat__title'>SCORE:</p>
            <p className='Stat__score'>
                <span className={`Stat__score-value ${scoreAnimation}`}>{score}</span>
                <span className={`Stat__animate-plus ${scoreAnimation}`}> + </span>
                <span className={`Stat__animate ${scoreAnimation}`}>{scorePlus}</span>
            </p>
            <p className='Stat__title'>BEST:</p>
            <p className='Stat__score'>
                <span className={`Stat__score-value ${recordAnimation}`}>{record}</span>
                <span className={`Stat__animate-plus ${recordAnimation}`}> + </span>
                <span className={`Stat__animate ${recordAnimation}`}>{recordPlus}</span>
            </p>
            <p className='Stat__title'>SPEED:</p>
            <p className='Stat__score'>{level}</p>
            <p className='Stat__title'>NEXT LEVEL:</p>
            <div className='Stat__next-level-container'>
                <div className='Stat__next-level-progress' style={{width: getProgress()}}></div>
            </div>
        </div>
        )
}

export default Stat;