const WRITE_MESSAGE = 'WRITE-MESSAGE';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';

let initialState = {
        messages: [
            { text: 'Hello I am dev', time: '17:20', type: 'opposite' },
            { text: 'good morning dev', time: '17:20', type: 'my' },
            { text: 'I am writing to say Billy ', time: '17:20', type: 'opposite' },
            { text: 'Herrington', time: '17:20', type: 'my' }
        ],
        newMessageBody: "start typing",
        users: ['Dima', 'Vlad', 'Kolia', 'Sasha', 'Vitalik', 'Ruslan', 'Max', 'Tania', 'Kolia2', 'Bogdan', 'Yaryk', 'Amsteri'],
};

const ReportsReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case WRITE_MESSAGE:
            let types = ['my', 'opposite'];
            let Time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let random = Math.floor(Math.random() * types.length);
            let Type = types[random];
            state.messages.push({ text: action.TextWrite, time: Time, type: Type });
            state.newMessageBody = ''
            return state;

        case CHANGE_TEXTAREA:
            state.newMessageBody = action.InputMessageValue
            return state;

        default:
            return state;

    }

}

export default ReportsReducer;