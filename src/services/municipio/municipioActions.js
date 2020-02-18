import { createActions } from 'redux-actions';

export const { municipios } = createActions({
  municipios: {
    GET_MUNICIPIOS: () => ({}),
    GET_MUNICIPIOS_RESPONSE: (municipios) => ({ municipios }),
  }
})