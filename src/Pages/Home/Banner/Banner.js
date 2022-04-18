import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../img/banner/banner1.png'
import Banner2 from '../../../img/banner/banner2.png'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h6 >Build Your Body</h6>
                    <h2>A SAFER , SIMPLER WAY TO EXERCISE</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h6>ARE YOU READY TO</h6>
                    <h1>GET FIT , STRONG & MOTIVATED</h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;