import { createActions } from 'redux-actions';

export const { producer } = createActions({
  PRODUCER: {

    CREATE_PRODUCER: (producer) => ({ producer }),
    CREATE_PRODUCER_RESPONSE: () => ({}),

    GET_GENDER: () => ({}),
    GET_GENDER_RESPONSE: (genderCount) => ({ genderCount }),
  }

})