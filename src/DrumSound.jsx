import { useRef, useState } from 'react';
import './Drumpad.css'
import {  playActionCreator } from './state';

const DrumSound = (props) => {

    const [ state, setState ] = useState('default'); 
    let sound = new Audio(props.sound.Soundlink);
    
    if( props.state === props.keyCode ){
        props.dispatch(playActionCreator(sound))
    }

    function PlaySound(){  
        props.dispatch(playActionCreator(sound))
    }
    
    return( 
        <div className="DrumSingleSound">
            <button onClick={PlaySound} className={`key ${props.sound.sound} ${state}`}>p</button>
        </div>
    )

}
export default DrumSound;
