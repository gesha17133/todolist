import { Link } from "react-router-dom";

import classes from './App.module.css';
const UserList = (props) => {
    return(
        <ul className={classes.userlist}>
            {
                props.Users.map((item, index) => {
                    return (
                    <li className={classes.user}>
                        <Link to={`/reports/chat/${index}`}>{item}</Link>
                    </li>
                    ) 
                })
            }    
        </ul>
    )
}
export default UserList;