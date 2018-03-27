export const PLAY_MUSIC = 'PLAY_MUSIC'

const initialState = {
  text: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export const playMusic = () => dispatch => {
  dispatch({
    type: PLAY_MUSIC
  });
};