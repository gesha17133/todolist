import DrumPadReducer from "./reducers/drums-reducers";
import ReportsReducer from "./reducers/reports-reducer";
import ToDoReducer from "./reducers/todolist-reducer";

export let store = {
    _state: {
        items: { items: ['mondo riny', 'Cream', 'pie', 'creators'], newPostText: "hello"},
        
        users: ['Dima', 'Vlad', 'Kolia', 'Sasha', 'Vitalik', 'Ruslan', 'Max', 'Tania', 'Kolia2', 'Bogdan', 'Yaryk', 'Amsteri'],
        
        messages:{ 
            messages: [
                { text: 'Hello I am dev', time: '17:20', type: 'opposite' },
                { text: 'good morning dev', time: '17:20', type: 'my' },
                { text: 'I am writing to say Billy ', time: '17:20', type: 'opposite' },
                { text: 'Herrington', time: '17:20', type: 'my' }
            ],
            newMessageBody: "start typing",
        },

        sounds: [
            {
                sound: 'Snare',
                Soundlink: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav',
                keyCode: 70
            },
            {
                sound: 'Kick',
                Soundlink: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav',
                keyCode: 68
            },
            {
                sound: 'Hat-Close',
                Soundlink: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav',
                keyCode: 74
            },
            {
                sound: 'Hat-Open',
                Soundlink: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav',
                keyCode: 86
            }
        ]

    },
    _RenderList() { },

    GetState() {
        return this._state;
    },
    subscribe(observer) {
        this._RenderList = observer;
    },
    dispatch(action) {
        this._state.sounds = DrumPadReducer( this._state.sounds, action );
        this._state.items = ToDoReducer( this._state.items, action );
        this._state.messages = ReportsReducer( this._state.messages, action )
        this._RenderList(this._state, action) 
    }

}


export let addActionTaskCreator = (text) => {
    return { type: 'CREATE_TASK', Task: text }
}

export let addActionEditCreatot = (Key, Item) => {
    return { type: 'EDIT_TASK', key: Key, item: Item }
}

export let inputActionCreator = (inputValue) => {
    return { type: 'CHANGE_POST_VALUE', TextInput: inputValue }
}
export let deleteTaskCreatot = (Key) => {
    return { type: 'DELETE_TASK', key: Key }
}

export let writeMessageCreator = (ValueText) => {
    return { type: 'WRITE-MESSAGE', TextWrite: ValueText }
}

export let changeTextAreaCreator = (pennis) => {
    return { type: 'CHANGE-TEXTAREA', InputMessageValue: pennis }
}

export let playActionCreator = (volume) => {
    return { type: 'PLAY-SOUND', SOUND: volume }
}

export let drumsReastartActionCreator = () => {
    return { type: 'SET-ACTIVE' }
}

export default store;