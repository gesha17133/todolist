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
              <ToDoList />
            </Route>
            <Route path='/reports'>
              <Reports />
            </Route>
            <Route path="/drumpad">
              <Drumpad />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
