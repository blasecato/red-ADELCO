import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerIndicator from '../services/indicadores/IndicadoresReducer';
import reducerAuth from '../services/Auth/AuthReducer';
import reducerproducer from '../services/Producer/ProducerReducer';
import reducerCrops from '../services/crop/cropReducer';
import reducerMunicipio from '../services/municipio/municipioReducer';
import reducerOrganization from '../services/organization/organizationReducer';
import reducerCade from '../services/line-cadena/line-cadenaReducer';
import reducerAtf from "../services/atf/AtfReducer";
import reducerKit from "../services/Kit/KitReducer";


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    indicator: reducerIndicator,
    auth: reducerAuth,
    producer: reducerproducer,
    crop: reducerCrops,
    municipio: reducerMunicipio,
    organization: reducerOrganization,
    cade: reducerCade,
    atf: reducerAtf,
    kit: reducerKit,
  });

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
