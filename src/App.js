import { Route, BrowserRouter, Switch } from 'react-router-dom';
import classes from './App.module.css';
import Menu from './Menu';
import Reports from './Report';
import ToDoList from './todolist';

function App(props) {
  return (
    <div className={classes.to_do_list}>  
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path='/tasks'>
            <ToDoList dispatch={props.dispatch} AllTasks={props.AllTasks} NewTextValue={props.NewTextValue}/>
          </Route>
          <Route path='/reports'>
            <Reports />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
