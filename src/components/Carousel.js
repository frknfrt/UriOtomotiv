import React,{ useState, useEffect } from "react";
import { Carousel } from 'antd';
import TireSize from "./TireSize";
import mainImg from '../assets/images/slide-1.jpeg';

const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      objectFit: "cover",
      display: isMobile ? "none" : "block", // Mobilde resmi gizle
    },
    tireSizeWrapper: {
      position: isMobile ? "relative" : "absolute",
      top: isMobile ? "0" : "50%",
      left: isMobile ? "0" : "5%",
      transform: isMobile ? "none" : "translateY(-50%)",
      width: "90%",
      height:  "auto",
      maxWidth: isMobile ? "none" : "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      overflowY: isMobile ? "auto" : "visible", // Mobilde kaydırılabilir yap
    },
  };

  return (
    <Carousel style={{marginTop:30}}>
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