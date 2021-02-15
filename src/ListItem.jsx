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
					{props.value}
				</div>
					<div className={classes.Actions}>
						{state === 'regularState' && ( <EditComponent valya={props.value} index={props.index} dispatch={props.dispatch} State={props.state} onClick={AssTripTwo} /> ) }
						<DeleteFinally index={props.index} dispatch={props.dispatch} />
					</div>
			</li>
		</div>
	)
}