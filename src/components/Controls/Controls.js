import React, { useState, useEffect } from 'react';

function Controls(props) {

    return(
        <>
        <button className='button' onClick={props.startGame}>START</button>
        <button className='button' onClick={props.stopGame}>PAUSE</button>
        </>
        )
}

export default Controls;