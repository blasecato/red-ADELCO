import { createActions } from 'redux-actions';

export const { atf } = createActions({
  atf: {
    CREATE_ATF: (atf) => ({ atf }),
    CREATE_ATF_RESPONSE: () => ({}),

    GET_ATF: () => ({}),
    GET_ATF_RESPONSE: (atf) => ({ atf }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (atf) => ({ atf }),

    UPDATE: (atf) => ({ atf }),
    UPDATE_RESPONSE: () => ({}),
  }
})