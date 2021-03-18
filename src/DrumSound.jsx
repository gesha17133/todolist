import { useRef, useState } from 'react';
import './Drumpad.css'
import {  playActionCreator } from './state';

const DrumSound = (props) => {

    let sound = new Audio(props.sound.Soundlink);
    

    function PlaySound(){  
        props.dispatch( playActionCreator(sound) )
    }
    
    return( 
        <div className="DrumSingleSound">
            <button onClick={PlaySound} className={`key ${props.sound.sound}`}>p</button>
        </div>
    )

}
export default DrumSound;
