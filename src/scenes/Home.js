import React from 'react';
import { Button, Input } from 'antd';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Tcp from "../assets/image/tcp.png";
import Logo from "../assets/image/redlogo.png";
import LayoutHome from "../components/LayoutHome/LayoutHome";

const { Search } = Input;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          submoduleSelect: undefined,
          kitPending: false,
          currentIndex: 0,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          }
        }
      }
    render() {
        const { submoduleSelect, kitPending, currentIndex, responsive } = this.state;
        return (
            <div className="home">
                <div className="home__img">
                    <img src={Tcp}></img>
                </div>
                <LayoutHome></LayoutHome>
                <AliceCarousel
                    responsive={responsive}
                    startIndex={currentIndex}
                    slideToIndex={currentIndex}
                    dotsDisabled={false}
                    buttonsDisabled={true}
                    duration={400}
                    onSlideChanged={this.onSlideChanged}
                    mouseTrackingEnabled
                >
                    <div>hola1</div>
                    <div>hola2</div>
                    <div>hola3</div>
                    <div>hola4</div>
                    <div>hola5</div>
                    <div>hola6</div>
                </AliceCarousel>
            </div>
        );

    }
}

export default Home;
