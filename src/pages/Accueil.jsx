// IMPORTS ICONS REACT
import { BiWalk } from 'react-icons/bi'
import { GiHealthNormal, GiClothes, GiHouse, GiThreeFriends, GiKnifeFork, GiBookmarklet } from 'react-icons/gi'
import { FaBalanceScale, FaRegBuilding } from 'react-icons/fa'

//IMPORTS DIVERS
import React, { useState } from 'react';
import {Navbar} from '../components/Navbar.jsx';

//IMPORTS CSS
import '../assets/css/accueil.css';


export function Accueil() {
    const [LanguageChoice, setLanguageChoice] = useState("");

    //setLanguageChoice = "Français";
    const ToDress = (evt) => alert(evt.currentTarget.id);

    return (

        <>
            <Navbar/>
            <div className="container pt-3">
                {/* LIGNE N°1 */}
                <div className="row">
                    <div className="col-4 menuButton mx-auto mt-4">
                        <GiKnifeFork className="icones mt-15px"></GiKnifeFork>
                        <br />
                        Se nourrir
                    </div>

                    <div className="col-4 menuButton mx-auto mt-4">
                        <GiHouse className="icones mt-15px"></GiHouse>
                        <br/>
                        Se loger
                    </div>
                </div>


                {/* LIGNE N°2 */}    
                <div className="row">
                    <div className="col-4 menuButton mx-auto mt-4">
                        <GiBookmarklet className="icones mt-15px"></GiBookmarklet>
                        <br/>  
                        Apprendre
                    </div>

                    <div className="col-4 menuButton mx-auto mt-4">
                        <BiWalk className="icones mt-15px"></BiWalk>
                        <br/>  
                        Se Déplacer
                    </div>
                </div>


                {/* LIGNE N°3 */} 
                <div className="row">
                    <div className="col-4 menuButton mx-auto mt-4"> 
                        <GiHealthNormal className="icones mt-15px"></GiHealthNormal>
                        <br />
                        Se Soigner
                    </div>

                    <div className="col-4 menuButton mx-auto mt-4">
                        <FaBalanceScale className="icones mt-15px"/> 
                        <br/>
                        Aide Juridique
                    </div>
                </div>


                {/* LIGNE N°4 */} 
                <div className="row">
                    <div className="col-4 menuButton mx-auto mt-4">
                        <FaRegBuilding className="icones mt-5px"></FaRegBuilding> 
                        <br/> 
                        Aide Administrative
                    </div>

                    <div className="col-4 menuButton mx-auto mt-4" onClick={ToDress} id="toDress">
                        <GiClothes className="icones mt-15px"></GiClothes>
                        <br/>   
                        S'habiller
                    </div>
                </div>
                

                {/* LIGNE N°5 */} 
                <div className="row">
                    <div className="col-4 menuButton mx-auto my-4" onClick={ToDress} id="toDress">
                        {/* <SiHandshake className="icones mt-15px"></SiHandshake> */}
                        <GiThreeFriends className="icones mt-15px"></GiThreeFriends>
                        <br/>   
                        S'insérer
                    </div>
                </div>
            </div>
        </>
    );
}