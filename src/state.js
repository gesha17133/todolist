
export let store = {
    _state:{
        items: ['mondo riny','Cream','pie','creators'],
        newPostText: "hello",
    },
    _RenderList(){},
   
    GetState(){
        return this._state;
    },

    subscribe(observer){
        this._RenderList = observer;
    },
    
    dispatch(action){
        if( action.type === "CREATE-TASK" ) {
            this._state.items.push(action.Task);
            this._RenderList(this._state);
        }
        else if( action.type === 'EDIT-TASK' ){   
            this._state.items.splice(action.key, 1, action.item);
            this._RenderList(this._state);
        }
        else if( action.type === 'CHANGE-POST-VALUE' ){
            this._state.newPostText = action.TextInput;
            this._RenderList(this._state); 
        }
        else if( action.type === 'DELETE-TASK' ){
            this._state.items.splice(action.key, 1);
            this._RenderList(this._state);
        }
    }
}

export default store;

window.store = store;