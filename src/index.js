import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from "./state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function RenderList(props){
    ReactDOM.render(
        <React.StrictMode>
          <App 
            dispatch={store.dispatch.bind(store)}
            AllTasks={store.GetState().items.items}
            NewTextValue={store.GetState().items.newMessageBody}
            InputUserText={store.GetState().messages.newMessageBody}
            Users={store.GetState().users}
            Messages={store.GetState().messages.messages}
            Drumsstore={store.GetState().sounds}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


RenderList( store.GetState() );
store.subscribe(RenderList);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
