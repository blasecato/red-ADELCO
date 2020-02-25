import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  cropsProducer: undefined,
  lineProductives: []
}

const reducer = handleActions({
  crop: {
    GET_CROPS_PRODUCER: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_CROPS_PRODUCER_RESPONSE: {
      next(state, { payload: { cropsProducer } }) {
        return { ...state, cropsProducer }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_LINE_PRODUCTIVE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_LINE_PRODUCTIVE_RESPONSE: {
      next(state, { payload: { lineProductives } }) {
        return { ...state, lineProductives }
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