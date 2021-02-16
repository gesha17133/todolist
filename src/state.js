
export let store = {
    _state:{
        items: ['mondo riny','Cream','pie','creators'],
        newPostText: "hello",
        users:['Dima','Vlad','Kolia','Sasha','Vitalik','Ruslan','Max','Tania','Kolia2','Bogdan','Yaryk','Amsteri'],
        messages:[
            {text:'Hello I am dev', time: '17:20',  type: 'opposite'},
            {text:'good morning dev', time: '17:20',  type: 'my'},
            {text:'I am writing to say Billy ', time: '17:20',  type: 'opposite'},
            {text:'Herrington', time: '17:20', type:  'my'}],
        newMessageBody:"start typing",
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
        else if( action.type === 'WRITE-MESSAGE' && action.TextWrite !== '' ){
            
            let types = ['my','opposite'];
            let Time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            let random = Math.floor(Math.random() * types.length);
            let Type = types[random];
            
            this._state.messages.push({ text: action.TextWrite, time: Time, type: Type } );
            this._state.newMessageBody = ''
            this._RenderList(this._state);

        }
        else if( action.type === 'CHANGE-TEXTAREA'){
            this._state.newMessageBody = action.InputMessageValue
            this._RenderList(this._state);
        }
        
    }
}

export default store;