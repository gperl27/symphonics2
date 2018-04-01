import transpose from '../transpose'

export const UPDATE_NOTES = 'UPDATE_NOTES'

const initialState = {
  text: null,
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export const updateNotes = text => dispatch => {
  const notes = transpose(text)

  dispatch({
    type: UPDATE_NOTES,
    payload: notes,
  });
};