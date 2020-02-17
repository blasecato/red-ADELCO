import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  cropsProducer: undefined,
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
  }
},
  INITIAL_STATE
);

export default reducer;