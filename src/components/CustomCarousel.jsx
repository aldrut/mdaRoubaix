import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";

import '../assets/css/carousel.css'

//CAROUSEL
import React, {useState} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {FaHandPointLeft} from "react-icons/fa"
import {FaHandPointRight} from "react-icons/fa"

export function CustomCarousel() {
    return (

        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={70} totalSlides={5} >

            <Slider>
                
            
            
                <Slide index={0}>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={dFrance} alt="" onClick="window.open('www.google.fr')" />
                        </div>
                    </div>
                    <div className="row">
                            <span>Cette application sera traduite en français</span>
                    </div>
                    
                    </Slide>
                <Slide index={1}>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={dRoumanie} alt="" />
                        </div>
                    </div>
                    <div className="row">
                            <span>Această aplicație va fi tradusă în limba română</span>
                    </div>
                    
                    </Slide>
                <Slide index={2}>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={dAngleterre} alt="" />
                        </div>
                    </div>
                    <div className="row">
                            <span>This application will be translate in english</span>
                    </div>
                    
                    </Slide>
                <Slide index={3}>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={dArabe} alt="" />
                        </div>
                    </div>
                    <div className="row">
                            <span>وسيترجم هذا التطبيق إلى اللغة الرومانية.</span>
                    </div>
                    
                    </Slide>
                <Slide index={4}>
                    <div className="row mt-5">
                        <div className="col">
                            <img src={dPortugal} alt="" />
                        </div>
                    </div>
                    <div className="row">
                            <span>Esta aplicação será traduzida em romeno</span>
                    </div>
                    
                    </Slide>
                
            </Slider>
            <ButtonBack className='btn btn-warning mx-2 '><FaHandPointLeft ></FaHandPointLeft></ButtonBack>
            <ButtonNext className='btn btn-warning'><FaHandPointRight></FaHandPointRight></ButtonNext>
            
        </CarouselProvider>

        // <div className="container pt-5">
        //     <div className="row justify-content-center">
        //         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        //             <div className="carousel-indicators">
        //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //             </div>

        //             <div className="carousel-inner">
        //                 <div className="carousel-item active">
        //                     <img src={dFrance} className="d-block w-50 mx-auto" alt="..." />
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5 className="text-dark">First slide label</h5>
        //                         <p className="text-dark">Some representative placeholder content for the first slide.</p>
        //                     </div>
        //                 </div>

        //                 <div className="carousel-item">
        //                     <img src="..." className="d-block w-100" alt="..." />
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5>Second slide label</h5>
        //                         <p>Some representative placeholder content for the second slide.</p>
        //                     </div>
        //                 </div>

        //                 <div className="carousel-item">
        //                     <img src="..." className="d-block w-100" alt="..." />
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5>Third slide label</h5>
        //                         <p>Some representative placeholder content for the third slide.</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //                 <span className="visually-hidden">Previous</span>
        //             </button>

        //             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //                 <span className="visually-hidden">Next</span>
        //             </button>
        //         </div>
        //     </div>
        // </div>



    );
}
