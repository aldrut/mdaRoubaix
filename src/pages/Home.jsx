//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import MyItem from "../assets/css/item";

import React, { useState } from "react";

//Import components
import Carousel from "react-elastic-carousel";
import { CustomBtnRightArrow } from "../components/CustomBtnRightArrow";
import { CustomBtnLeftArrow } from "../components/CustomBtnLeftArrow";
import { CustomCarousel } from "../components/CustomCarousel";




export function Home() {

    return ( 
        <>
            <CustomCarousel/>
        </>
    );
}
