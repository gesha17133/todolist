import { Route, BrowserRouter, Switch } from 'react-router-dom';
import classes from './App.module.css';
import Drumpad from './DrumPud';
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
            <Reports Users={props.Users} Messages={props.Messages} dispatch={props.dispatch} InputUserText={props.InputUserText}/>
          </Route>
          <Route path="/drumpad">
            <Drumpad Drumsstore={props.Drumsstore} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
