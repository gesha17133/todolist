import { FaTrash } from "react-icons/fa";
import classes from "./App.module.css";
import { deleteTaskCreatot } from "./state";

export default function DeleteFinally(props){

    let FunctionDelete = () => {
        props.dispatch(deleteTaskCreatot(props.index)); 
    }
    return (
        <button onClick={FunctionDelete} onKeyDown={ FunctionDelete } className={classes.MyPenisIsVeryBig}><FaTrash/></button>
    )
}