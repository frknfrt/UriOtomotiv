import React from 'react';
import TireSize from "../TireSize";
import mainImg from'../../assets/images/slide-1.jpeg'

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.',
  }
]

function AppHero() {
  return (

      <Carousel>
      <div className="container"  style={{position:"relative" , height:50}}>
      <img style={{width:'100%',height:'100%',objectFit:"cover" }} alt='anasayfa' src={mainImg}></img>
             <div style={{ position:'absolute',top:'20%',left:'10%',transform:'translate(-50%, -50%);'}}>
                    <TireSize ></TireSize>
                </div>
            </div>
      </Carousel>
  );
}

export default AppHero;