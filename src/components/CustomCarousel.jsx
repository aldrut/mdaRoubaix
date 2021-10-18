//Import de drapeaux
import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";

//Import CSS
import '../assets/css/carousel.css'

//CAROUSEL
import React, {useState} from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
// import {FaHandPointLeft} from "react-icons/fa"
// import {FaHandPointRight} from "react-icons/fa"









import{FrenchAccueil} from "../pages/Accueil.jsx"
import { render } from "@testing-library/react";

export function CustomCarousel() {

    // const handleClick = (evt) =>
    // {
    //     let btnEvt = evt.currentTarget.name;

    //     if(btnEvt === "btnPrev")
    //     {
    //         slide

    //     }
    //     else
    //     {

    //     }
    // };
        

    let slideIndex = 1;
    showSlides(slideIndex);

    // NEXT / PREVIOUS
     function selectSlide(n){
        showSlides(slideIndex += n);
    };

    // CHOIX DES SLIDES
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = slides.length
        };

        for (i = 0; i < slides.length; i++) {
            slides[i].className.add(" d-none");
            // slides[i].className.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.add(" active", "");
        }

        slides[slideIndex-1].className.add("d-block");
        dots[slideIndex-1].className.add(" active");
    }
    


    return (

        

        <div className="container pt-5">
            <h1 className="mb-5">Langue :</h1>

            {/* Caroussel */}
            <div className="row justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    {/* <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> */}

                    <div className="carousel-inner">
                        {/* FRANCAIS */}
                        <div className="carousel-item active slide" name="france">
                            <img src={dFrance} className="d-block w-50 mx-auto" alt="..." />
                            <div>
                                <h3 className="text-dark mt-2">Français</h3>
                                <p className="text-dark">Cette application sera traduite en français.</p>
                            </div>
                        </div>

                        {/* ANGLAIS */}
                        <div className="carousel-item slide" name="anglais">
                            <img src={dAngleterre} className="d-block w-50 mx-auto" alt="..." />
                            <div>
                                <h3 className="text-dark mt-2">English</h3>
                                <p className="text-dark">This application will be translate in English.</p>
                            </div>
                        </div>

                        {/* ARABE */}
                        <div className="carousel-item slide" name="arabe">
                            <img src={dArabe} className="d-block w-50 mx-auto" alt="..." />
                            <div>
                                <h3 className="text-dark mt-2">Arabe</h3>
                                <p className="text-dark">وسيترجم هذا التطبيق إلى اللغة الرومانية.</p>
                            </div>
                        </div>

                        {/* PORTUGAIS */}
                        <div className="carousel-item slide" name="portugais">
                            <img src={dPortugal} className="d-block w-50 mx-auto" alt="..." />
                            <div>
                                <h3 className="text-dark mt-2">Romero</h3>
                                <p className="text-dark">Esta aplicação será traduzida em Romeno</p>
                            </div>
                        </div>

                        {/* ROUMAIN */}
                        <div className="carousel-item slide" name="roumain">
                            <img src={dRoumanie} className="d-block w-50 mx-auto" alt="..." />
                            <div>
                                <h3 className="text-dark mt-2">Română</h3>
                                <p className="text-dark">Această aplicație va fi tradusă în limba Română</p>
                            </div>
                        </div>
                    </div>

                    {/* BOUTONS GAUCHE */}
                    <button className="carousel-control-prev prev" type="button" onClick={selectSlide(-1)} name="btnPrev">
                        <span className="carousel-control-prev-icon" id="previousBtn" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    {/* BOUTONS DROITE */}
                    <button className="carousel-control-next next" type="button" onClick={selectSlide(1)} name="btnNext">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                    <div className="text-center text-dark">
                        <span class="dot" onclick={currentSlide(1)}></span>
                        <span class="dot" onclick={currentSlide(2)}></span>
                        <span class="dot" onclick={currentSlide(2)}></span>
                        <span class="dot" onclick={currentSlide(4)}></span>
                        <span class="dot" onclick={currentSlide(5)}></span>
                    </div>
                </div>
            </div>
        </div>





        // <CarouselProvider className="carousel" naturalSlideWidth={100} naturalSlideHeight={25} totalSlides={5} >

        //     <Slider>
        //         <Slide index={0} className="bg-info">
        //             <div className="row">
        //                 <div className="col">
        //                     <a href="http://google.fr"><img src={dFrance} alt="drapeau_francais" /></a>
        //                 </div>
        //             </div>

        //             <div className="row">
        //                 <span>Cette application sera traduite en français</span>
        //             </div>
        //         </Slide>

        //         <Slide index={1}>
        //             <div className="row mt-5">
        //                 <div className="col">
        //                     <img src={dRoumanie} alt="" />
        //                 </div>
        //             </div>

        //             <div className="row">
        //                 <span>Această aplicație va fi tradusă în limba română</span>
        //             </div>
        //         </Slide>

        //         <Slide index={2}>
        //             <div className="row mt-5">
        //                 <div className="col">
        //                     <img src={dAngleterre} alt="" />
        //                 </div>
        //             </div>

        //             <div className="row">
        //                 <span>This application will be translate in english</span>
        //             </div>
        //         </Slide>

        //         <Slide index={3}>
        //             <div className="row mt-5">
        //                 <div className="col">
        //                     <img src={dArabe} alt="" />
        //                 </div>
        //             </div>

        //             <div className="row">
        //                 <span>وسيترجم هذا التطبيق إلى اللغة الرومانية.</span>
        //             </div>
        //         </Slide>

        //         <Slide index={4}>
        //             <div className="row mt-5">
        //                 <div className="col">
        //                     <img src={dPortugal} alt="" />
        //                 </div>
        //             </div>

        //             <div className="row">
        //                 <span>Esta aplicação será traduzida em romeno</span>
        //             </div>
        //         </Slide>

                
        //     </Slider>

        //     <ButtonBack className='btn btn-warning mx-5 btnMains'><FaHandPointLeft ></FaHandPointLeft></ButtonBack>
        //     <ButtonNext className='btn btn-warning mx-5 btnMains'><FaHandPointRight></FaHandPointRight></ButtonNext>
            
        // </CarouselProvider>




    );
}
