//IMPORTS CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyItem from "../assets/css/formulaire";


//IMPORTS DIVERS
// import React, { useState } from "react";
import { MainCarousel } from '../components/MainCarousel';
import { CustomButton } from '../components/CustomButton';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';


export function Formulaire(props) {
    const { handleValidClick } = props;
    const [sexe, setSexe] = useState('');
    const [enfants, setEnfants] = useState('');
    const [etudiant, setEtudiant] = useState('');
    const [chomage, setChomage] = useState('');
    const [retraite, setRetraite] = useState('');
    const [sdf, setSdf] = useState('');
    const [handicap, setHandicap] = useState('');
    const [anniv, setAnniv] = useState('');

    const submitClick = () =>{

    }

    return (
        <>
            <Navbar />

            {/* <MainCarousel   data={null} 
                            handleValidClick={handleValidClick} 
                            showMini={false} 
                            inputType="text"
                            inputValue="value"
                            inputPlaceholder="placeholder"
            /> */}

                
                <div className="form mt-3">

                    {/* SEXE */}
                    <div className="row">
                        <div className="col-6">
                            Êtes-vous :
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setSexe(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Homme
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setSexe(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Femme
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* ENFANTS */}
                    <div className="row mt-4">
                        <div className="col-7">Combien avez vous d'enfants ?</div>
                        <input onChange={(e)=>{setEnfants(e.target.value)}} type="text" min="0" max="20" maxlength="2" className="col-4"/>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* ETUDIANT */}
                    <div className="row mt-4">
                        <div className="col-6">
                            Êtes-vous étudiant ?
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setEtudiant(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Oui
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setEtudiant(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* CHOMAGE */}
                    <div className="row mt-4">
                        <div className="col-6">
                            Êtes-vous au chomage ?
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setChomage(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Oui
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setChomage(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* RETRAITE */}
                    <div className="row mt-4">
                        <div className="col-6">
                            Êtes-vous à la retraite ?
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setRetraite(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Oui
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setRetraite(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* Sdf */}
                    <div className="row mt-4">
                        <div className="col-6">
                            Êtes-vous sans domicile fixe ?
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setSdf(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Oui
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setSdf(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* RQTH */}
                    <div className="row mt-4">
                        <div className="col-6">
                            Avez vous une reconnaissance d'handicap ?
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setHandicap(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                
                                <label className ="form-check-label" for="exampleRadios1">
                                    Oui
                                </label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mx-auto">
                                <input onChange={(e)=>{setHandicap(e.target.value)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                
                                <label className ="form-check-label" for="exampleRadios2">
                                    Non
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className="w-50 mx-auto"/>

                    {/* ANNIV */}
                    <div className="row mt-4">
                        <div className="mx-auto d-flex">
                            <div>Quelle est votre année de naissance ? </div>
                            <div className="col-1"></div>
                            <input  onChange={(e)=>{setAnniv(e.target.value)}} type="text" maxlength="4" className="col-3"/>
                        </div>
                    </div>

                <button onClick={submitClick} className="btn btn-success mt-3">Valider</button>

                </div>


        </>
    );
}

