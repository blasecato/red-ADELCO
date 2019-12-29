import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "../src/scenes/Home";
import Login from "../src/scenes/Login/Login";
import Users from "../src/scenes/Users/Users";
import QueryUser from "../src/scenes/Users/QueryUser/QueryUser";
import DeleteUpdateUser from "../src/scenes/Users/DeleteUpdateUser/DeleteUpdateUser";
import RegisterUser from "../src/scenes/Users/RegisterUser/RegisterUser";
import Profile from "../src/scenes/Users/Profile/Profile";
import Coberturas from "../src/scenes/Coberturas/Coberturas";
import CadenasProductivas from "../src/scenes/CadenasProductivas/CadenasProductivas";
import Infraestructura from "../src/scenes/Infraestructura/Infraestructura";
import Organizaciones from "../src/scenes/Organizaciones/Organizaciones";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login/" component={Login} /> 
        <Route path="/users/" component={Users} /> 
        <Route path="/queryuser/" component={QueryUser} /> 
        <Route path="/deleteupdateuser/" component={DeleteUpdateUser} /> 
        <Route path="/profile/" component={Profile} /> 
        <Route path="/coberturas/" component={Coberturas} /> 
        <Route path="/registeruser/" component={RegisterUser} /> 
        <Route path="/cadenasproductivas/" component={CadenasProductivas} /> 
        <Route path="/infraestructura/" component={Infraestructura} /> 
        <Route path="/organizaciones/" component={Organizaciones} /> 
      </Router>
    </div>
  );
}

export default App;
