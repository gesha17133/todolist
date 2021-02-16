import classes from "./App.module.css";
import { createRef, useState } from "react";
import {FaCheck, FaPen} from 'react-icons/fa';
export default function EditComponent(props){

    const[state, setState] = useState(props.state);


    let Text = createRef();

    function GooksAreCommig(){
        setState('ActiveForm'); 
    }

    function FuckOff(){
        let text = Text.current.value;
        if(text !== ''){
            props.dispatch({type:"EDIT-TASK", key: props.index, item: text })
            setState(props.state)      
        }
        else{
            props.dispatch({type:"EDIT-TASK", key: props.index, item: props.valya })
            setState(props.state)
        }
    }

    return(
        <div className={classes.EditableArea}>
            {
                state === props.State && ( <button on onClick={GooksAreCommig}><FaPen /> </button> ) 
            }        
            {
                state === 'ActiveForm' && ( <div><input ref={ Text }  type="text" /><button onClick={FuckOff}><FaCheck/></button></div> )
            }
        </div>
    )
} 