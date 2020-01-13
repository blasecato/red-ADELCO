import React from 'react';
import { Link } from 'react-router-dom';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

class Login extends React.Component{
render(){
    return(
        <div className="login">
            <LayoutHome></LayoutHome>
            <h1>hola login</h1>
            <Link class="home__nav__index" href="/home">home</Link>
        </div>
    );

}
}

export default Login;
