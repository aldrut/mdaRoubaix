//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import MyItem from "../assets/css/item";

import React, { useState } from "react";
import { MyCarousel } from '../components/MyCarousel';






export function Home(props) {

    const {handleValidClick} = props;

    return ( 
        <>
        <div className="display-6 fw-bold col-10 mx-auto ">
            Maison Des Associations de Roubaix
        </div>

            <MyCarousel data={null} handleValidClick={handleValidClick} />
        </>
    );
}
