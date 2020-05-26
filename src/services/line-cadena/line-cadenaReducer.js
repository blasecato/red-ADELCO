import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  dateInfra: undefined,
  infra: [],
  veredas: [],
  cade: []
}

const reducer = handleActions({
  CADE: {
    GET_DATE_INFRA: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_DATE_INFRA_RESPONSE: {
      next(state, { payload: { dateInfra } }) {
        return { ...state, dateInfra }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_INFRA: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_INFRA_RESPONSE: {
      next(state, { payload: { infra } }) {
        return { ...state, infra }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_VEREDAS: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_VEREDAS_RESPONSE: {
      next(state, { payload: { cades } }) {
        return { ...state, cades }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_CADE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_CADE_RESPONSE: {
      next(state, { payload: { cade } }) {
        return { ...state, cade }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_INFRA: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_INFRA_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_VEREDA: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_VEREDA_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_CADENA: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_CADENA_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_LINE: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_LINE_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RESPONSE: {
      next(state, { payload: { dateLine } }) {
        return { ...state, dateLine }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { infra } }) {
        return { ...state, infra }
      },
      throw(state, action) {
        return { ...state }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;