import { combineReducers, createStore } from "redux";
import DrumPadReducer from "../reducers/drums-reducers";
import ReportsReducer from "../reducers/reports-reducer";
import ToDoReducer from "../reducers/todolist-reducer";

let reducers = combineReducers({
    items: ToDoReducer,
    messages: ReportsReducer,
    sounds: DrumPadReducer,
}); 

export let store = createStore(reducers);

export default store;