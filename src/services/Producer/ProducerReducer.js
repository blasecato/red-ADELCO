import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  genderCount: undefined,
}

const reducer = handleActions({
  PRODUCER: {

    CREATE_PRODUCER: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_PRODUCER_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_GENDER: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_GENDER_RESPONSE: {
      next(state, { payload: { genderCount } }) {
        return { ...state, genderCount }
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