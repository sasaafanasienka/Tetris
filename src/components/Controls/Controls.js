import React, { useState, useEffect } from 'react';
import './Controls.sass'

function Controls(props) {

    return(
        <div className='Controls'>
            <button className='button' onClick={props.startGame}>START</button>
            <button className='button' onClick={props.stopGame}>PAUSE</button>
            <button className='button' onClick={props.changeSpeed}>FASTER!!!</button>
        </div>
        )
}

export default Controls;