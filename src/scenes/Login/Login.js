import React from 'react';

import LayoutHome from "../../components/LayoutHome/LayoutHome";

class Login extends React.Component{
render(){
    return(
        <div className="login">
            <LayoutHome></LayoutHome>
            <h1>hola login</h1>
            <a class="home__nav__index" href="/home">home</a>
        </div>
    );

}
}

export default Login;
