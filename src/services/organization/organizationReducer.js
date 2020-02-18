import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
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
  }
},
  INITIAL_STATE
);

export default reducer;