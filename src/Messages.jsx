import classes from "./App.module.css"
import './index.css';
const Messages = (props) => {
    
    return(
        <div className={classes.messgeWindow}>    
            <ul>
                { props.Messages.map((item, index) => {
                    return(<div className={item.type}><li className={item.type}>{item.text}<span>{item.time}</span></li></div>)
                })
                }
            </ul>
        </div>
    )
}
export default Messages;