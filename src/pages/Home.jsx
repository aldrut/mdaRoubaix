//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import MyItem from "../assets/css/item";

import React, { useState } from "react";

//Import components
// import Carousel from "react-elastic-carousel";
// import { CustomBtnRightArrow } from "../components/CustomBtnRightArrow";
// import { CustomBtnLeftArrow } from "../components/CustomBtnLeftArrow";
// import { CustomCarousel } from "../components/CustomCarousel";
import { MyCarousel } from '../components/MyCarousel';






export function Home() {

 

    return ( 
        <>
        <div className="display-5 fw-bold ">
            "La Maison Des Associations"
        </div>
            <MyCarousel/>
        </>
    );
}
