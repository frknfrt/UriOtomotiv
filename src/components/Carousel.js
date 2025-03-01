import React from 'react';
import { Carousel } from 'antd';
import TireSize from "./TireSize";
import mainImg from '../assets/images/slide-1.jpeg';

const CarouselComponent = () => {
  const styles = {
    container: {
      position: "relative",
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain", // Görselin tamamen görünmesini sağlar, taşmayı önler
      maxWidth: "1920px", // Eski görselin en-boy oranına uyum sağlar
      maxHeight: "1080px",
    },
    tireSizeWrapper: {
      position: "absolute",
      top: "50%",
      left: "5%",
      transform: "translateY(-50%)",
      width: "90%",
      maxWidth: "400px",
    },
  };

  return (
    <Carousel dots={false} autoplay>
      <div style={styles.container}>
        <img style={styles.image} src={mainImg} alt="Slide" />
        <div style={styles.tireSizeWrapper}>
          <TireSize />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;