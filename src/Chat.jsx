import Messages from './Messages';
import classes from './App.module.css';
import WriteMessage from './WriteMessage';
import { MyContext } from './contextstore';
const Chat = (props) => {
    return( 
        <div className={classes.chatWindowWrap}>
            <div className={classes.chatWindow}>
                <div className={classes.UserHeader}><img className={classes.avatart} src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="alt"/>{props.item}</div>
              <Messages Messages={props.Messages} />
            </div>
            <WriteMessage dispatch={props.dispatch} InputUserText={props.InputUserText}/>
        </div>
    )
}
export default Chat;