import { Route, Switch } from 'react-router';
import classes from './App.module.css';
import Chat from './Chat';
import UserList from './Userlist';

const Reports = (props) => {
    return(
        <div className={classes.ZalupkaUpUpka}>
            <UserList Users={props.Users} />
                <Switch>
                    {props.Users.map((item, index) => {
                    return(    
                        <Route path={`/reports/chat/${index}`}>
                            <Chat item={item} Users={props.Users} InputUserText={props.InputUserText} Messages={props.Messages} dispatch={props.dispatch}/>
                        </Route>
                    )
                    })}
                </Switch>
        </div>
    )
}

export default Reports;