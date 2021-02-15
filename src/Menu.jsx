import classes from "./App.module.css";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
  
const Menu = () => {
    return (
        <div className={classes.MenuTop}>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
            </ul>
        </div>
    )
}
export default Menu;