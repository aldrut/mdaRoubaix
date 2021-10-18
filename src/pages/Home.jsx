
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { CustomCarousel } from "../components/CustomCarousel";

export function Home() {

 

    return ( 
        <>
        <div className="display-5 fw-bold ">
            "La Maison Des Associations"
        </div>
            <CustomCarousel/>
        </>
    );
}
