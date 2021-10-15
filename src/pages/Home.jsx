
import logo from "../assets/drapeaux/logomda.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { CustomCarousel } from "../components/CustomCarousel";

export function Home() {

 

    return ( 
        <>
        <div className="display-5 font-weight">
            "La Maison Des Associations"
        </div>
            <CustomCarousel/>
        </>
    );
}
