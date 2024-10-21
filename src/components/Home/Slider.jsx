import React from 'react';
import forklift from "./forkliftlastik.jpg";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import SliderCom from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../index.css"
const Slider = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };



    return (
        <div>
                <img  alt="forklift" src={forklift}/>



        </div>
    );
};

export default Slider;