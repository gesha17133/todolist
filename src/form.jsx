import { createRef } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./App.module.css";

export default function CreateForm(props) {

	let Text = createRef();

	let CreateFinally = () => {
		let text = Text.current.value;
		if (text) { 
			props.dispatch( {type: 'CREATE-TASK', Task: text } );
		}
		props.dispatch({type: 'CHANGE-POST-VALUE', TextInput: '' })
	}

	let UpdateText = () => {
		let text = Text.current.value;
		props.dispatch({type: 'CHANGE-POST-VALUE', TextInput: text })
	}

	return (
		<div className={classes.DivchikForm}>
			<input ref={Text} onChange={UpdateText} value={props.NewTextValue} className={classes.InputikFormochki} type="text" />
			<button onClick={CreateFinally} className={classes.Submitor}><FaPlus/></button>
		</div>
	)
}