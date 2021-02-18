import './Drumpad.css';
import DrumSound from './DrumSound';
import  {useState}  from "react";
import { drumsReastartActionCreator } from './state';

const Drumpad = (props) => {    
    
    const[state, setState] = useState('default');
    
    let PressF = (e) => {
        setState(e.keyCode);
        props.dispatch(drumsReastartActionCreator());
    }
    
    return(
        <div className="drummachine" onKeyDown={PressF} tabIndex={0}>
            <img class="drum-kit" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/drum-kit.png" alt="Drum Kit" />
            <div className='sounds'>
                {props.Drumsstore.map((sound, index) => {
                    return ( <DrumSound state={state} keyCode={sound.keyCode} index={index} sound={sound} Drumsstore={props.Drumsstore} dispatch={props.dispatch} />)
                })
                }
            </div>
        </div>
    )
}
export default Drumpad;
