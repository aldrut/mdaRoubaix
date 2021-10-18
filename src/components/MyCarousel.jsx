import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";
import { MyCarouselItem } from "./MyCarouselItem";
import React, {useState} from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {FaArrowAltCircleLeft} from 'react-icons/fa';

import '../assets/css/carousel.css';

export const MyCarousel = (props) => {

    let [slideIndex, setSlideIndex] = useState(0);

    

    const tabLangues = [
    {
        imgSrc:dFrance,
        lang:'France',
        desc:'Cette application sera traduite en Français.',
        text:'Français',
        titre:"Langue",
    },

    {
        imgSrc:dAngleterre,
        lang:'Angleterre',
        desc:'This application will be translate in English',
        text:'English',
        titre:"Language",
    }, 

    {
        imgSrc:dRoumanie,
        lang:'Roumain',
        desc:'Această aplicație va fi tradusă în limba Română',
        text:'Română',
        titre:"Limba",
    }, 

    {
        imgSrc:dPortugal,
        lang:'Portugais',
        desc:'Esta aplicação será traduzida em Portugues',
        text:'Portugues',
        titre:"Lingua",
    }, 

    {
        imgSrc:dArabe,
        lang:'Arabe',
        desc:'وسيترجم هذا التطبيق إلى اللغة الرومانية',
        text:'العربية',
        titre:"لغة",
    }];

    const previousSlide = (evt) => {

        if(slideIndex < 1 ){
            setSlideIndex(slideIndex=tabLangues.length -1);
        }else{
            setSlideIndex(slideIndex - 1)
        }
    }

    const nextSlide = (evt) => {

        if(slideIndex >= tabLangues.length -1){
            setSlideIndex(slideIndex = 0);
        }
        else{
            setSlideIndex(slideIndex + 1);
        }
    }

    return (
        <div className="container pt-5">
            <h1 className="mb-5">
               {tabLangues[slideIndex].titre}
            </h1>

            {/* Caroussel */}
            <div className="row justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner mt-5">
                        {tabLangues.map((item, i) => {
                            const {lang, imgSrc, text, desc, titre} =item;
                            return <MyCarouselItem key={lang} lang={lang} imgSrc={imgSrc} text={text} desc={desc} visible={i === slideIndex} titre={titre} />;
                        })}
                    </div>

                    {/* BOUTONS GAUCHE */}
                    <button className="carousel-control-prev" type="button" onClick={previousSlide} name="btnPrev">
                        <span className="" id="previousBtn" aria-hidden="true">
                            <FaArrowAltCircleLeft className="text-black h1"/>
                        </span>
                    </button>

                    {/* BOUTONS DROITE */}
                    <button className="carousel-control-next" type="button" onClick={nextSlide} name="btnNext">
                        <span className="" aria-hidden="true">
                            <FaArrowAltCircleRight className="text-dark h1"/>
                        </span>
                    </button>

                   
                </div>

                <div className="">
                    <span class=""><img src={dFrance} alt="" class="miniflag"/></span>
                    <span class=""><img src={dAngleterre} alt="" class="miniflag"/></span>
                    <span class=""><img src={dRoumanie} alt="" class="miniflag"/></span>
                    <span class=""><img src={dPortugal} alt="" class="miniflag"/></span>
                    <span class=""><img src={dArabe} alt="" class="miniflag"/></span>
                </div>

            </div>
        </div>

    );

}