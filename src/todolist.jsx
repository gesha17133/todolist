import classes from './App.module.css';
import CreateForm from './form';
import ItemList from './ListItem';

function ToDoList(props) {
  return (
      <div className={classes.tasksTodo}>
        <ul className={classes.Tasks}>
            {props.AllTasks.map(function( item, index ){
            return <ItemList  value={item} index={index} dispatch={props.dispatch} />
            })
            }
        </ul>
        <CreateForm dispatch={props.dispatch} NewTextValue={props.NewTextValue} />
      </div>
  );
}

export default ToDoList;
