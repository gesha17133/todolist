import { useRef } from 'react';
import classes from './App.module.css';
import { changeTextAreaCreator, writeMessageCreator } from './state';
const WriteMessage = (props) => {
    const Text = useRef();
    
    let CreateMessage = () => {
        let text = Text.current.value;
        props.dispatch(writeMessageCreator(text));
    }

    let ChangeTextArea = () => {
        let refText = Text.current.value
        props.dispatch(changeTextAreaCreator(refText))
    }
    
    return (
        <div className={classes.mesasgeContainer}>
           <textarea onChange={ChangeTextArea} value={props.InputUserText} ref={Text} name="thewriting_component" id="writer_text" />
           <button onClick={CreateMessage} className={classes.submitMessage}>Send</button>
        </div>
    )
}

export default WriteMessage;