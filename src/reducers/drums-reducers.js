const PLAY_SOUND = 'PLAY-SOUND';

let initialState = {
    
};

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