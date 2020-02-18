import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  municipios: undefined,
}

const reducer = handleActions({
  municipios: {
    GET_MUNICIPIOS: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_MUNICIPIOS_RESPONSE: {
      next(state, { payload: { municipios } }) {
        return { ...state, municipios }
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