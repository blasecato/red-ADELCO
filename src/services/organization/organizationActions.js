import { createActions } from 'redux-actions';

export const { organization } = createActions({
  organization: {
    CREATE_ORGANIZATION: (organization) => ({ organization }),
    CREATE_ORGANIZATION_RESPONSE: () => ({}),

    GET_ORGANIZATION: () => ({}),
    GET_ORGANIZATION_RESPONSE: (organizations) => ({ organizations }),
  }
})