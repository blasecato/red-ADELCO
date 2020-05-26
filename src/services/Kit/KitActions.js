import { createActions } from 'redux-actions';

export const { kit } = createActions({
  kit: {
    CREATE_KIT: (kit) => ({ kit }),
    CREATE_KIT_RESPONSE: () => ({}),

    GET_KIT: () => ({}),
    GET_KIT_RESPONSE: (kit) => ({ kit }),

    GET_KIT_USER: () => ({}),
    GET_KIT_USER_RESPONSE: (kit) => ({ kit }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (kit) => ({ kit }),

    UPDATE: (kit) => ({ kit }),
    UPDATE_RESPONSE: () => ({}),
  }
})