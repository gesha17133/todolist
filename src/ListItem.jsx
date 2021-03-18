import { useState } from "react";
import classes from "./App.module.css";
import DeleteFinally from "./DeleteButton";
import EditComponent from "./EditComponent";

export default function ItemList(props) {

	const [state, setState] = useState('regularState');

	const AssTripTwo = () => {
		setState('gooks')
	}
	
	return (
		<div>
			<li className={classes.ListSingleItem}>
				
				<div>
					{props.index + 1}.
					{props.item }
				</div>

				<div>
					{state === 'regularState' && ( <EditComponent text_value={props.item} index={props.index} dispatch={props.store.dispatch.bind(props.store)} state={state} onClick={AssTripTwo} /> ) }
					<DeleteFinally index={props.index} dispatch={props.store.dispatch.bind(props.store)} />
				</div>

			</li>
		</div>
	)
}