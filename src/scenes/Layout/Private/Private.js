import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from '../../Home';
import Users from '../../Users/Users';
import { QueryUser } from '../../Users/QueryUser/QueryUser';
import {DeleteUpdateUser} from '../../Users/DeleteUpdateUser/DeleteUpdateUser';
import {Profile} from '../../Users/Profile/Profile';
import Coberturas from '../../Coberturas/Coberturas';
import { RegisterUser } from '../../Users/RegisterUser/RegisterUser';
import { CadenasProductivas } from '../../CadenasProductivas/CadenasProductivas';
import Infraestructura from '../../Infraestructura/Infraestructura';
import Organizaciones from '../../Organizaciones/Organizaciones';
import Tipo from '../../Infraestructura/Tipo/Tipo';
import TipoCadena from '../../CadenasProductivas/tipo/TipoCadena';
import { RegisterOrg } from '../../Organizaciones/components/RegisterOrg/RegisterOrg';
import { RegisterInfra } from '../../Infraestructura/components/RegisterInfra/RegisterInfra';
import { Indicadores } from '../../Indicadores/Indicadores';
import { useDispatch, useSelector } from 'react-redux';
import { indicators as indicatorAcctions } from '../../../services/indicadores/IndicadoresActions'
import { RegisterChain } from "../../../scenes/CadenasProductivas/RegisterChain/RegisterChain";
import { RegisterLine } from "../../../scenes/CadenasProductivas/RegisterChain/RegisterLine";
import { SelectComponent } from "../../../components/User/SelectComponent";
import { SingUp } from "../../Admin/SingUp/SingUp";
import { Cultivo } from "../../CadenasProductivas/Cultivos/Cultivos";
import { RegisterUserSocial } from "../../Organizaciones/components/UserSocial/UserSocial";
import { RegisterCultivos } from "../../CadenasProductivas/Cultivos/RegisterCultivos";
import { OrgQuery } from "../../Organizaciones/components/Org/Org";
import { InfraQuery } from "../../Infraestructura/components/RegisterInfra/QueryInfraestructura/QueryInfraestructura";
import { Vereda } from "../../CadenasProductivas/Veredas/Veredas";
import { RegisterVereda } from "../../CadenasProductivas/Veredas/RegistrarVereda";
import { Beneficios } from "../../CadenasProductivas/Beneficios/Beneficios";
import { Kid } from "../../CadenasProductivas/Kid/Kid";
import { Diagnostico } from "../../CadenasProductivas/Diagnostico/Diagnostico";
import { Diagnosticos } from "../../CadenasProductivas/VerDiagnosticos/VerDiagnosticos";
import { Aft } from "../../CadenasProductivas/Aft/Aft";
import { Afts } from "../../CadenasProductivas/Afts/Afts";
import { KitUser } from "../../CadenasProductivas/kitUser/kitUser";
import { Reincorporacion } from "../../Reincorporacion/Reincorporacion";
import { ActualizarOrgFrom } from "../../Organizaciones/components/ActulizarOrg/ActulizarOrg";
import { ActualizarInfra } from '../../Infraestructura/components/ActualizarInfra/ActualizarInfra';
import {BeneficiariosOrga } from '../../Organizaciones/components/BeneficiariosOrg/BeneficiariosOrg';
import { LineProductoves } from '../../CadenasProductivas/LineProductove/LineProductove';

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
        <Route path="/profile/:id" component={Profile} />
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
        <Route path="/registrarline/" component={RegisterLine} />
        <Route path="/update/" component={SelectComponent} />
        <Route path="/singup/" component={SingUp} />
        <Route path="/cultivos/" component={Cultivo} />
        <Route path="/usersocial/" component={RegisterUserSocial} />
        <Route path="/registercultivos/" component={RegisterCultivos} />
        <Route path="/orgquery/" component={OrgQuery} />
        <Route path="/infraquery/" component={InfraQuery} />
        <Route path="/vereda/" component={Vereda} />
        <Route path="/register-vereda/" component={RegisterVereda} />
        <Route path="/reincorporacion/" component={Reincorporacion} />
        <Route path="/actulizarorg/" component={ActualizarOrgFrom} />
        <Route path="/actulizarinfra/" component={ActualizarInfra} />
        <Route path="/beneficiariosorg/" component={BeneficiariosOrga} />
        <Route path="/linea-productiva/" component={LineProductoves} />
        <Route path="/beneficios/" component={Beneficios} />
        <Route path="/kit/" component={Kid} />
        <Route path="/Aft/" component={Aft} />
        <Route path="/Afts/" component={Afts} />
        <Route path="/kituser/" component={KitUser} />
        <Route path="/diagnosticos/" component={Diagnostico} />
        <Route path="/ver-diagnosticos/" component={Diagnosticos} />
      </Router>
    </div>
  )
}
