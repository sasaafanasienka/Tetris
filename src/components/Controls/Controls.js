import React, { useState, useEffect } from 'react';
import './Controls.sass'
import start from '../../images/start.svg'
import pause from '../../images/pause.svg'

function Controls(props) {

    return(
        <div className='Controls'>
            <button className='button' onClick={props.startGame}>
                <img src={start}></img>
            </button>
            <button className='button' onClick={props.stopGame}>
                <img src={pause}></img>
            </button>
        </div>
        )
}

export default Controls;