import React from 'react';
import { Carousel } from 'antd';
import TireSize from "./TireSize";
import mainImg from '../assets/images/slide-1.jpeg'
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CarouselComponent = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div className="container"  style={{position:"relative" , height:50}}>
                <img style={{width:'100%',height:'100%',objectFit:"cover" }} src={mainImg}></img>
                <div style={{ position:'absolute',top:'20%',left:'10%',transform:'translate(-50%, -50%);'}}>
                    <TireSize ></TireSize>
                </div>
            </div>
        </Carousel>
    );
};
export default CarouselComponent;