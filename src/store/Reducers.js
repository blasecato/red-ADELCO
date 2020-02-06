import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerIndicator from '../services/indicadores/IndicadoresReducer';

/** axample reducer*/
//import reducerAuth from '../services/Auth/AuthReducer';


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    indicator: reducerIndicator,
  });

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
