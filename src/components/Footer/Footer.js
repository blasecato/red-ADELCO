import React from "react";

import img from "../../assets/image/img/don.jpg";

import face from "../../assets/image/face.png";
import inst from "../../assets/image/inst.png";
import you from "../../assets/image/you.png";
import twi from "../../assets/image/twi.png";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer--content">
                    <div className="title">Planeacion hacia el futuro</div>
                    <img src={img}/>
                </div>
                <div className="footer--content">
                    <div className="title">Redes Sociales</div>
                    <div className="images">
                        <img src={face}/>
                        <img src={inst}/>
                        <img src={you}/>
                        <img src={twi}/>
                    </div>
                </div>
                <div className="footer--content">
                    <div className="title">Contactos</div>
                    <br/>
                    <p className="text">
                        <span className="text--title">Correo:</span> <span>red_adelco@gamail.com</span>
                    </p>
                    <p className="text">
                        <span className="text--title">Telefono:</span> <span>3213213213</span>
                    </p>
                    <p className="text">
                        <span className="text--title">Direccion:</span> <span>calle epocas 12 34 5 sur</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;