import React from 'react';
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";

import Carousel from "react-material-ui-carousel";
import Slider from "./Slider.jsx";

const Row1 = () => {


  const items = [
    {
      name: "Random Name #1",
      description: "1 - Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "2- Hello World!"
    },
    {
      name: "Random Name #3",
      description: "3 - Hello World!"
    }
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur,prev) => {
    setIndex(cur);
    console.log(cur, prev);
  };



  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );

  return (
    <div className="flex flex-row ">
      {/* Left Sidebar */}
      <div className=" text-gray-700 w-64 flex-shrink-0 hidden xl:block">
        <nav className="py-6">
          <ul>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.0")}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.1")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.2")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.3")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.4")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.5")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.6")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.7")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.8")}{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Vertical Line */}
      <div className="border-l border-gray-300 hidden xl:block"></div>
<Slider></Slider>

    </div>
  );
};

export default Row1;
