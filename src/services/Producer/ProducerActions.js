import { createActions } from 'redux-actions';

export const { producer } = createActions({
  PRODUCER: {

    CREATE_PRODUCER: (producer) => ({ producer }),
    CREATE_PRODUCER_RESPONSE: () => ({}),

    UPDATE_PRODUCER: (producer) => ({ producer }),
    UPDATE_PRODUCER_RESPONSE: () => ({}),

    GET_GENDER: () => ({}),
    GET_GENDER_RESPONSE: (genderCount) => ({ genderCount }),

    GET: (dni) => ({ dni }),
    GET_RESPONSE: (producer) => ({ producer }),

    GET_PRODUCER_DATE: () => ({}),
    GET_PRODUCER_DATE_RESPONSE: (genderDate) => ({ genderDate }),

    GET_PRODUCER_INCORPORACION: () => ({}),
    GET_PRODUCER_INCORPORACION_RESPONSE: (incorporacionDate) => ({ incorporacionDate }),

    GET_PRODUCER_UPDATE: () => ({}),
    GET_PRODUCER_UPDATE_RESPONSE: (getProducerUpdateDate) => ({ getProducerUpdateDate }),
  }

})