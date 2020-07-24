import { createActions } from 'redux-actions';

export const { organization } = createActions({
  organization: {
    CREATE_ORGANIZATION: (organization) => ({ organization }),
    CREATE_ORGANIZATION_RESPONSE: () => ({}),

    UPDATE_USER: (user) => ({ user }),
    UPDATE_USER_RESPONSE: () => ({}),

    GET_USER: (user) => ({ user }),
    GET_USER_RESPONSE: (users) => ({users}),

    CREATE_DIAGNOSTICO: (organization) => ({ organization }),
    CREATE_DIAGNOSTICO_RESPONSE: () => ({}),

    GET_ORGANIZATION: () => ({}),
    GET_ORGANIZATION_RESPONSE: (organizations) => ({ organizations }),
    
    GET_DIAGNOSTICO: () => ({}),
    GET_DIAGNOSTICO_RESPONSE: (organizations) => ({ organizations }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (organization) => ({ organization }),

    UPDATE: (organization) => ({ organization }),
    UPDATE_RESPONSE: () => ({}),
  }
})