import React from "react";

//importacion de imagenes requeridas en este componente
import img from "../../assets/image/img/don.jpg";
import face from "../../assets/image/face.png";
import inst from "../../assets/image/inst.png";
import you from "../../assets/image/you.png";
import twi from "../../assets/image/twi.png";


//componente de footer
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                {/* contenedor del footer en el cual tiene las imagenes y titulos correspondientes */}
                <div className="footer--content">
                    <div className="title">Planeacion hacia el futuro</div>
                    <img src={img}/>
                </div>
                <div className="footer--content">
                    {/* imagenes e iconos de redes sociales de la empresa */}
                    <div className="title">Redes Sociales</div>
                    <div className="images">
                        <a href="https://www.facebook.com/RedAdelcoColombia/"><img src={face}/></a>
                        <a href="https://www.instagram.com/redadelco/"><img src={inst}/></a>
                        <a href="https://www.youtube.com/channel/UC9EVBqzvI8UzNT2ZudKf18w"><img src={you}/></a>
                        <a href="https://twitter.com/RedAdelco"><img src={twi}/></a>
                    </div>
                </div>
                {/* contenedor de informacion de la empresa como contactos etc */}
                <div className="footer--content">
                    <div className="title">Contactos</div>
                    <br/>
                    <p className="text">
                        <span className="text--title">Telefono:</span> <span>(+57) (8) 436 96 07</span>
                    </p>
                    <p className="text">
                        <span className="text--title">Direccion:</span> <span>Carrera 3E N° 32B-24/ Cunduy – Florencia, Caquetá</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;