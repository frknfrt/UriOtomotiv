import React from 'react';
import { Carousel } from 'antd';
import TireSize from "./TireSize";
import mainImg from '../assets/images/slide-1.jpeg';

const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    tireSizeWrapper: {
      position: "absolute",
      top: "50%",
      left: "5%", // Büyük ekranlarda sola hizalama
      transform: "translateY(-50%)",
      width: "90%", // Responsive genişlik
      maxWidth: "400px", // Maksimum genişlik sınırı
    },
  };

  return (
    <Carousel afterChange={onChange}>
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
