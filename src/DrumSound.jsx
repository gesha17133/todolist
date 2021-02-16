import { useRef } from 'react';
import './Drumpad.css'

const DrumSound = (props) => {
    
    const myRef = useRef();

    let PlaySound = () => {
       let audio = myRef.current;
       audio.play()
    }
    
    return(
        <div className="DrumSingleSound">
            <audio ref={myRef} src={props.sound.Soundlink}>link</audio>
            <button onClick={PlaySound} className="key">p</button>
        </div>
    )
}
export default DrumSound;
