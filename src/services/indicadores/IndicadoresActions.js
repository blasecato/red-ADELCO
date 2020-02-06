import { createActions } from 'redux-actions';

export const { indicators } = createActions({
  INDICATORS: {

    GET_INDICATORS: () => ({}),
    GET_INDICATORS_RESPONSE: (indicators) => ({ indicators }),

  }

})