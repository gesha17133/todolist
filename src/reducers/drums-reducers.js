const PLAY_SOUND = 'PLAY-SOUND';

let initialState = [
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

const DrumPadReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case PLAY_SOUND:
            action.SOUND.play();
            return state;
        default: 
            return state;

    }
}
export default DrumPadReducer;