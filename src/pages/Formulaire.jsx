//IMPORTS CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyItem from "../assets/css/formulaire";


//IMPORTS DIVERS
// import React, { useState } from "react";
import { MyCarousel } from '../components/MyCarousel';
import {Navbar} from '../components/Navbar';

export function Formulaire(props) {
    const {handleValidClick} = props;

    return ( 
        <>
            <Navbar/>

            <MyCarousel data={null} handleValidClick={handleValidClick} />
        </>
    );
}
