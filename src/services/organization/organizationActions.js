import { createActions } from 'redux-actions';

export const { organization } = createActions({
  organization: {
    CREATE_ORGANIZATION: (organization) => ({ organization }),
    CREATE_ORGANIZATION_RESPONSE: () => ({}),
  }
})