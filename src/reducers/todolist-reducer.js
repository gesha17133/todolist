const CREATE_TASK = 'CREATE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    items: ['mondo riny', 'Cream', 'pie', 'creators'], newPostText: "hello"
};

const ToDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK:
            state.items.push(action.Task); 
            return state;

        case EDIT_TASK:
            state.items.splice(action.key, 1, action.item); 
            return state;

        case CHANGE_POST_VALUE:
            state.items.newPostText = action.TextInput; 
            return state;
        
        case DELETE_TASK:
            state.items.splice(action.key, 1);
            return state;
        default:
            return state;
    }
} 
export default ToDoReducer;
