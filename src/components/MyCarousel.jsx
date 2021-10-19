import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";
import { MyCarouselItem } from "./MyCarouselItem";
import { MiniFlag } from "./MiniFlag";
import React, {useState} from 'react';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {FaArrowAltCircleLeft} from 'react-icons/fa';

import '../assets/css/carousel.css';

export const MyCarousel = (props) => {

    const {handleValidClick} = props;
    let [slideIndex, setSlideIndex] = useState(0);

    

    const tabLangues = [
    {
        imgSrc:dFrance,
        lang:'France',
        desc:'Cette application sera traduite en Français.',
        text:'Français',
        titre:"Langue",
        link:"http://www.google.fr",
        btnValid: 'Valider',
    },

    {
        imgSrc:dAngleterre,
        lang:'Angleterre',
        desc:'This application will be translate in English',
        text:'English',
        titre:"Language",
        link:"http://www.google.fr",
        btnValid: 'Validate',
    }, 

    {
        imgSrc:dRoumanie,
        lang:'Roumain',
        desc:'Această aplicație va fi tradusă în limba Română',
        text:'Română',
        titre:"Limba",
        link:"http://www.google.fr",
        btnValid: 'Valida',
    }, 

    {
        imgSrc:dPortugal,
        lang:'Portugais',
        desc:'Esta aplicação será traduzida em Portugues',
        text:'Portugues',
        titre:"Lingua",
        link:"http://www.google.fr",
        btnValid: 'Validar',
    }, 

    {
        imgSrc:dArabe,
        lang:'Arabe',
        desc:'هذا التطبيق سوف يترجم إلى اللغة العربية',
        text:'العربية',
        titre:"لغة",
        link:"http://www.google.fr",
        btnValid: 'للتحقق من صحة',
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
        <div className="container mt-5">
            <h1 className="pt-5">
               {tabLangues[slideIndex].titre}
            </h1>

            {/* Caroussel */}
            <div className="row justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner mt-4">
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

                    {/* BOUTONS VALIDER */}
                    <button className="btn btn-success mt-5 btn-lg" onClick={handleValidClick.bind(this, "Accueil")}>{tabLangues[slideIndex].btnValid}</button>
                </div>

                <div className="">
                    <MiniFlag data={tabLangues} setSlideIndex={setSlideIndex}/>

                    {/* <span class=""><a href="http://www.google.fr"><img src={dFrance} alt="" class="miniflag"/></a></span> */}
                    {/* <span class=""><img src={dAngleterre} alt="" class="miniflag"/></span>
                    <span class=""><img src={dRoumanie} alt="" class="miniflag"/></span>
                    <span class=""><img src={dPortugal} alt="" class="miniflag"/></span>
                    <span class=""><img src={dArabe} alt="" class="miniflag"/></span> */}
                </div>

            </div>
        </div>

    );

}