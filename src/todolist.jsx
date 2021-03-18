import classes from './App.module.css';
import CreateForm from './form';
import ItemList from './ListItem';
import { MyContext } from './contextstore';

function ToDoList() {
  return (
    <MyContext.Consumer>{value =>
      <div className={classes.tasksTodo}>
         
          <ul className={classes.Tasks}>
              {value.getState().items.items_list.map(( item, index ) => {
                return <ItemList item={item} index={index} store={value} />
              })
              }
          </ul>
        <CreateForm dispatch={value.dispatch.bind(value)} NewTextValue={value.getState().items.newPostText}/>
      </div>
    }</MyContext.Consumer>
  );
}

export default ToDoList;
