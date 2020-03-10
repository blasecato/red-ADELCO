import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  organizations: []
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

    GET_ORGANIZATION: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_ORGANIZATION_RESPONSE: {
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
  }
},
  INITIAL_STATE
);

export default reducer;