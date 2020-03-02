import { createActions } from 'redux-actions';

export const { crop } = createActions({
  crop: {
    GET_CROPS_PRODUCER: () => ({}),
    GET_CROPS_PRODUCER_RESPONSE: (cropsProducer) => ({ cropsProducer }),

    CREATE_CROP: (crop) => ({ crop }),
    CREATE_CROP_RESPONSE: () => ({}),

    GET_CROPS_DATE: () => ({}),
    GET_CROPS_DATE_RESPONSE: (cropsDate) => ({ cropsDate }),

    GET_LINE_PRODUCTIVE: () => ({}),
    GET_LINE_PRODUCTIVE_RESPONSE: (lineProductives) => ({ lineProductives }),
  }
})