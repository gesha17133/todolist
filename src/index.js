import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function RenderList(props){
    ReactDOM.render(
        <React.StrictMode>
          <App 
            dispatch={store.dispatch.bind(store)}
            AllTasks={store.getState().items.items}
            NewTextValue={store.getState().items.newMessageBody}
            InputUserText={store.getState().messages.newMessageBody}
            Users={store.getState().messages.users}
            Messages={store.getState().messages.messages}
            Drumsstore={store.getState().sounds}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


RenderList( store.getState() );
store.subscribe(RenderList);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
