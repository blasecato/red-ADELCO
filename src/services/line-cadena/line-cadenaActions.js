import { createActions } from 'redux-actions';

export const { cade } = createActions({
  CADE: {
    GET_DATE_INFRA: () => ({}),
    GET_DATE_INFRA_RESPONSE: (dateInfra) => ({ dateInfra }),

    GET_INFRA: () => ({}),
    GET_INFRA_RESPONSE: (infra) => ({ infra }),

    GET_CADE: () => ({}),
    GET_CADE_RESPONSE: (cade) => ({ cade }),

    GET_VEREDAS: () => ({}),
    GET_VEREDAS_RESPONSE: (veredas) => ({ veredas }),

    CREATE_INFRA: (infra) => ({ infra }),
    CREATE_INFRA_RESPONSE: () => ({}),

    CREATE_VEREDA: (vereda) => ({ vereda }),
    CREATE_VEREDA_RESPONSE: () => ({}),

    CREATE_CADENA: (cadena) => ({ cadena }),
    CREATE_CADENA_RESPONSE: () => ({}),

    CREATE_LINE: (line) => ({ line }),
    CREATE_LINE_RESPONSE: () => ({}),

    GET: (id) => ({ id }),
    GET_RESPONSE: (dateLine) => ({ dateLine }),

    GET_INFRA_ID: (id) => ({ id }),
    GET_INFRA_ID_RESPONSE: (infra) => ({ infra }),

    UPDATE: (cade) => ({ cade }),
    UPDATE_RESPONSE: () => ({}),
  }
})