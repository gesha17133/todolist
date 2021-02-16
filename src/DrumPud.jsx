import './Drumpad.css';
import DrumSound from './DrumSound';
const Drumpad = (props) => {
    let PressF = () => {
        alert('gook')
    }
    return(
        <div  className="drummachine" tabindex={0} onKeyDown={PressF}>
            <img class="drum-kit" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/drum-kit.png" alt="Drum Kit" />
            <div className='sounds'>
                {props.Drumsstore.map((sound, index) => {
                    return ( <DrumSound index={index} keydown={props.keydown} sound={sound} Drumsstore={props.Drumsstore} />)
                })
                }
            </div>
        </div>
    )
}
export default Drumpad;