import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyContext } from './contextstore';

export default function RenderList(props){
    ReactDOM.render(
        <React.StrictMode>
           <MyContext.Provider value={store}>
            <App />
            </MyContext.Provider>
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
