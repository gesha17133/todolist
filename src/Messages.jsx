import classes from "./App.module.css"
import './index.css';
import { MyContext } from './contextstore';
const Messages = (props) => {
    
    return(
        <div className={classes.messgeWindow}>    
            <ul>
                { props.Messages.map((item, index) => {
                    return( <MyContext.Consumer>{value => <div className={item.type}><li className={item.type}>{item.text}<span style={{BackgroundColor: value}} >{item.time}</span></li></div> }</MyContext.Consumer>)
                })
                }
            </ul>
        </div>
    )
}
export default Messages;