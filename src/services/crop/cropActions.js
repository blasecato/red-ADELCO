import { createActions } from 'redux-actions';

export const { crop } = createActions({
  crop: {
    GET_CROPS_PRODUCER: () => ({}),
    GET_CROPS_PRODUCER_RESPONSE: (cropsProducer) => ({ cropsProducer }),

    GET_LINE_PRODUCTIVE: () => ({}),
    GET_LINE_PRODUCTIVE_RESPONSE: (lineProductives) => ({ lineProductives }),
  }
})