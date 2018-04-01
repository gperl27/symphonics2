import Transpose from '../transpose'

export const SET_TEXT = 'SET_TEXT'
export const UPDATE_CONTROLS = 'UPDATE_CONTROLS'

const initialState = {
  text: 'Art is the residue of creation.',
  controls: {
    playing: false,
    paused: false,
    stopped: true,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      }

    case UPDATE_CONTROLS:
      return {
        ...state,
        controls: action.payload
      }

    default:
      return state;
  }
};

export const setText = text => dispatch => {
  dispatch({ type: SET_TEXT, payload: text })
}

export const playMusic = () => (dispatch, getState) => {
  const text = getState().music.text
  const music = new Transpose(text)
  console.log(music, 'MUSIC')
  music.composeAndPlay();

  const controls = {
    playing: true,
    paused: false,
    stopped: false,
  }

  dispatch({
    type: UPDATE_CONTROLS,
    payload: controls
  });
};