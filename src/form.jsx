import { createRef } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./App.module.css";
import { addActionTaskCreator, inputActionCreator } from "./state";

export default function CreateForm(props) {

	let Text = createRef();

	let CreateFinally = () => {
		let text = Text.current.value;
		if (text) { 
			props.dispatch( addActionTaskCreator(text) );
		} 
		props.dispatch(inputActionCreator(''))
	}

	let UpdateText = () => {
		let text = Text.current.value;
		props.dispatch(inputActionCreator(text))
	}
	return (
		<div className={classes.DivchikForm}>
			<input ref={Text} onChange={UpdateText} value={props.NewTextValue} className={classes.InputikFormochki} type="text" />
			<button onClick={CreateFinally} className={classes.Submitor}><FaPlus/></button>
		</div>
	)
}