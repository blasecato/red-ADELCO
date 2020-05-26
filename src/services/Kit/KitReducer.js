import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  kit: []
}

const reducer = handleActions({
  kit: {
    CREATE_KIT: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_KIT_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_KIT: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_KIT_RESPONSE: {
      next(state, { payload: { kit } }) {
        return { ...state, kit }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_KIT_USER: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_KIT_USER_RESPONSE: {
      next(state, { payload: { kit } }) {
        return { ...state, kit }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RESPONSE: {
      next(state, { payload: { kit } }) {
        return { ...state, kit }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { kit } }) {
        return { ...state, kit }
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