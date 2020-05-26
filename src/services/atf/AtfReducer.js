import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  atf: []
}

const reducer = handleActions({
  atf: {
    CREATE_ATF: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_ATF_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_ATF: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_ATF_RESPONSE: {
      next(state, { payload: { atf } }) {
        return { ...state, atf }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RESPONSE: {
      next(state, { payload: { atf } }) {
        return { ...state, atf }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { atf } }) {
        return { ...state, atf }
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