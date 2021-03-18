import './Drumpad.css';
import DrumSound from './DrumSound';
import  {useState}  from "react";
import { drumsReastartActionCreator } from './state';
import { MyContext } from './contextstore';

const Drumpad = () => {    
    
    return(
        <div className="drummachine" >
            <img className="drum-kit" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/drum-kit.png" alt="Drum Kit" />
            <div className='sounds'>
            <MyContext.Consumer>
            {value =>            
                    value.getState().sounds.map((sound, index) => {
                        return ( <DrumSound sound={sound } index={index} dispatch={value.dispatch.bind(value)} /> ) 
                    })
                
            }
            </MyContext.Consumer>
            </div>
        </div>
    )    
}
export default Drumpad;
