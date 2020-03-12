import { createActions } from 'redux-actions';

export const { organization } = createActions({
  organization: {
    CREATE_ORGANIZATION: (organization) => ({ organization }),
    CREATE_ORGANIZATION_RESPONSE: () => ({}),

    GET_ORGANIZATION: () => ({}),
    GET_ORGANIZATION_RESPONSE: (organizations) => ({ organizations }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (organization) => ({ organization }),

    UPDATE: (organization) => ({ organization }),
    UPDATE_RESPONSE: () => ({}),
  }
})