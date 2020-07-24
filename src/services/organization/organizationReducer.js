import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  organizations: [],
  users:[]
}

const reducer = handleActions({
  organization: {
    CREATE_ORGANIZATION: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_ORGANIZATION_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE_USER: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_USER_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_DIAGNOSTICO: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_DIAGNOSTICO_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_ORGANIZATION: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_ORGANIZATION_RESPONSE: {
      next(state, { payload: { organizations } }) {
        return { ...state, organizations }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_DIAGNOSTICO: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_DIAGNOSTICO_RESPONSE: {
      next(state, { payload: { organizations } }) {
        return { ...state, organizations }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RESPONSE: {
      next(state, { payload: { organization } }) {
        return { ...state, organization }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_USER: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_USER_RESPONSE: {
      next(state, { payload: { users } }) {
        return { ...state, users }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { organization } }) {
        return { ...state, organization }
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