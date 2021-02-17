import { FaTrash } from "react-icons/fa";
import classes from "./App.module.css";

export default function DeleteFinally(props){

    let FunctionDelete = () => {
        props.dispatch({type: 'DELETE-TASK', key: props.index }); 
    }
    return (
        <button onClick={FunctionDelete} onKeyDown={ FunctionDelete } className={classes.MyPenisIsVeryBig}><FaTrash/></button>
    )
}