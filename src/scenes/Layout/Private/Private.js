import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from '../../Home';
import Users from '../../Users/Users';
import QueryUser from '../../Users/QueryUser/QueryUser';
import DeleteUpdateUser from '../../Users/DeleteUpdateUser/DeleteUpdateUser';
import Profile from '../../Users/Profile/Profile';
import Coberturas from '../../Coberturas/Coberturas';
import RegisterUser from '../../Users/RegisterUser/RegisterUser';
import CadenasProductivas from '../../CadenasProductivas/CadenasProductivas';
import Infraestructura from '../../Infraestructura/Infraestructura';
import Organizaciones from '../../Organizaciones/Organizaciones';
import Tipo from '../../Infraestructura/Tipo/Tipo';
import TipoCadena from '../../CadenasProductivas/tipo/TipoCadena';
import RegisterOrg from '../../Organizaciones/components/RegisterOrg/RegisterOrg';
import RegisterInfra from '../../Infraestructura/components/RegisterInfra/RegisterInfra';
import { Indicadores } from '../../Indicadores/Indicadores';
import { useDispatch, useSelector } from 'react-redux';
import { indicators as indicatorAcctions } from '../../../services/indicadores/IndicadoresActions'
import RegisterChain from "../../../scenes/CadenasProductivas/RegisterChain/RegisterChain";
import { SelectComponent } from "../../../components/User/SelectComponent";
import  SingUp  from "../../Admin/SingUp/SingUp";
export const Private = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(indicatorAcctions.getIndicators())
  }, [])

  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/users/" component={Users} />
        <Route path="/queryuser/" component={QueryUser} />
        <Route path="/deleteupdateuser/" component={DeleteUpdateUser} />
        <Route path="/profile/" component={Profile} />
        <Route path="/coberturas/" component={Coberturas} />
        <Route path="/registeruser/" component={RegisterUser} />
        <Route path="/cadenasproductivas/" component={CadenasProductivas} />
        <Route path="/infraestructura/" component={Infraestructura} />
        <Route path="/organizaciones/" component={Organizaciones} />
        <Route path="/tipo/" component={Tipo} />
        <Route path="/tipocadena/" component={TipoCadena} />
        <Route path="/registerorg/" component={RegisterOrg} />
        <Route path="/registerinfra/" component={RegisterInfra} />
        <Route path="/indicadores/" component={Indicadores} />
        <Route path="/registrarcadenasproductivas/" component={RegisterChain} />
        <Route path="/update/" component={SelectComponent} />
        <Route path="/singup/" component={SingUp} />
      </Router>
    </div>
  );

}
