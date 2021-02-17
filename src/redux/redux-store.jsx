import { combineReducers, createStore } from "redux";
import DrumPadReducer from "../reducers/drums-reducers";
import ReportsReducer from "../reducers/reports-reducer";
import ToDoReducer from "../reducers/todolist-reducer";

let store = createStore();

let reducers = combineReducers({
    TodoList: ToDoReducer,
    Reports: ReportsReducer,
    Drumpad: DrumPadReducer, 
}
); 

export default store;