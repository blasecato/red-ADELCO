import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerIndicator from '../services/indicadores/IndicadoresReducer';
import reducerAuth from '../services/Auth/AuthReducer';
import producerAuth from '../services/Producer/ProducerReducer';
import reducerCrops from '../services/crop/cropReducer';


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    indicator: reducerIndicator,
    auth: reducerAuth,
    producer: producerAuth,
    crop: reducerCrops,
  });

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
