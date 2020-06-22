import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  indicators: [],
  loading: false,
}

const reducer = handleActions({
  INDICATORS: {

    GET_INDICATORS: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_INDICATORS_RESPONSE: {
      next(state, { payload: { indicators } }) {
        return { ...state, indicators }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { indicators } }) {
        return { ...state, indicators }
      },
      throw(state, action) {
        return { ...state }
      }
    },

  }
},
  INITIAL_STATE
);

export default reducer;