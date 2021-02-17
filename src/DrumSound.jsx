import { useRef, useState } from 'react';
import './Drumpad.css'

const DrumSound = (props) => {
    const [ state, setState ] = useState('default'); 
    let sound = new Audio(props.sound.Soundlink);
    if( props.state === props.keyCode ){
        props.dispatch({type:'PLAY-SOUND', SOUND: sound })
    }
    
    function PlaySound(){
        props.dispatch({ type:'PLAY-SOUND', SOUND: sound })
        setState('pencil');
    }
    
    return( 
        <div className="DrumSingleSound">
            <button onClick={PlaySound} className={`key ${props.sound.sound} ${state}`}>p</button>
        </div>
    )

}
export default DrumSound;
