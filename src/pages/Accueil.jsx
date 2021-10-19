import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BiWalk } from 'react-icons/bi'
import { GiHealthNormal } from 'react-icons/gi'
import { GiWhiteBook } from 'react-icons/gi'
import { GiHamburger } from 'react-icons/gi'
import { GiClothes } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { FaBalanceScale } from 'react-icons/fa'
import { FaCity } from 'react-icons/fa'
import React, { useState } from 'react';

import '../assets/css/accueil.css';


export function Accueil() {

    const [LanguageChoice, setLanguageChoice] = useState("");

    //setLanguageChoice = "Français";
    const ToDress = (evt) => alert(evt.currentTarget.id);

    return (
        <>
            {/* <div className="display-5 fw-bold ">
                Maison Des Associations de Roubaix
            </div>

            <div className="container">
                <div className="row mt-5" >
                    <div className="col menuButton">
                        <GiEarthAfricaEurope color="blue"></GiEarthAfricaEurope><br />Français
                    </div>

                    <div className="col menuButton">
                        <GiHamburger></GiHamburger><br />
                        Se nourrir
                    </div>
                </div>

                <div className="row mt-1 mb-1">
                    <div className="col menuButton "><AiOutlineHome></AiOutlineHome><br />Se loger</div>
                    <div className="col menuButton"><GiWhiteBook></GiWhiteBook><br />  Apprendre</div>
                </div>

                <div className="row mb-1">
                    <div className="col menuButton"> <BiWalk color="orange"></BiWalk><br />  Se Déplacer</div>
                    <div className="col menuButton">
                        <GiHealthNormal color="green" ></GiHealthNormal>
                        <br />
                        Se Soigner
                    </div>
                </div>

                <div className="row">
                    <div className="col menuButton"> <FaBalanceScale /> <br />Aide Juridique</div>
                    <div className="col menuButton"><FaCity></FaCity> <br /> Aide Administrative</div>
                </div>

                <div className="row">
                    <div className="col menuButton" onClick={ToDress} id="toDress"><GiClothes ></GiClothes><br />   S' Habiller</div>
                    <div className="col menuButton">S'insérer</div>
                </div>


            </div> */}







            <div className="container pt-5">

                <div className="display-5 fw-bold mt-5">
                    Maison Des Associations de Roubaix
                </div>

                <div className="row pt-5">

                    <div className="col-5 menuButton mx-auto mt-4 text-light">
                        <GiHamburger size={50} ></GiHamburger>
                        <br />
                        Se nourrir
                    </div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"><AiOutlineHome className="icones" ></AiOutlineHome><br/>Se loger</div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"><GiWhiteBook size={50} ></GiWhiteBook><br/>  Apprendre</div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"> <BiWalk size={50} ></BiWalk><br/>  Se Déplacer</div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"> <GiHealthNormal size={50} ></GiHealthNormal>
                        <br />
                        Se Soigner
                    </div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"> <FaBalanceScale size={50} /> <br/>Aide Juridique</div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light"><FaCity size={50} ></FaCity> <br/> Aide Administrative</div>

                    <div className="col-5 menuButton mx-auto mt-4 text-light" onClick={ToDress} id="toDress"><GiClothes size={50} ></GiClothes><br/>   S' Habiller</div>
                    
                    <div className="col-5 menuButton mx-auto mt-4 text-light">S'insérer</div>

                </div>

            </div>



        </>
    );
}