
import logo from "../assets/drapeaux/logomda.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import MyItem from "../assets/css/item";
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
