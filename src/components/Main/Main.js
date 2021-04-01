import React, { useState, useEffect, useCallback } from 'react';
import './Main.sass'
import '../../styles/button.sass'
import PlayArea from '../PlayArea/PlayArea'
import Controls from '../Controls/Controls'
import Stat from '../Stat/Stat'
import Queue from '../Queue/Queue'
import gameProcess from '../GameProcess/nextStep'
import { moveLeft } from '../../redux/actions/moveLeft';
import { moveRight } from '../../redux/actions/moveRight';
import { rotate } from '../../redux/actions/rotate';
import { useDispatch, useSelector } from 'react-redux';
import { GAME_PAUSE, GAME_START } from '../../redux/types';
import nextStep from '../GameProcess/nextStep';
import { autoStep } from '../GameProcess/autoStep';

function Main() {

    const dispatch = useDispatch()
    // const gameStatus = useSelector(state => { return state.gameStatus.status })

    function startGame() {
        window.addEventListener('keydown', keyActions)
        dispatch({type: GAME_START})
        autoStep()
    }
    
    function stopGame() {
        window.removeEventListener('keydown', keyActions)
        dispatch({type: GAME_PAUSE})
    }

    const keyActions = useCallback((event) => { //хук useCallBack
        if (event.code === 'Numpad5' || event.code === 'ArrowDown' || event.code === 'KeyS') {
            event.preventDefault()
            nextStep()
        } else if (event.code === 'Numpad4' || event.code === 'ArrowLeft' || event.code === 'KeyA') {
            event.preventDefault()
            dispatch(moveLeft())
        } else if (event.code === 'Numpad6' || event.code === 'ArrowRight' || event.code === 'KeyD') {
            event.preventDefault()
            dispatch(moveRight())
        }  else if (event.code === 'Numpad8' || event.code === 'ArrowUp' || event.code === 'KeyW') {
            event.preventDefault()
            dispatch(rotate())
        }        
    }, [])

    return(
        <main className="Main">
            <PlayArea />
            <div className="Main__controls-panel">
                <Stat />       
                <Controls startGame={startGame} stopGame={stopGame} />
                <Queue />
            </div>
        </main>
        )
}

export default Main;