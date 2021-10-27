import { MyCarousel } from './MyCarousel';
import { MiniFlag } from "./MiniFlag";

//IMPORTS DRAPEAUX
import dFrance from "../assets/img/drapeaux/dFr.png";
import dAngleterre from "../assets/img/drapeaux/dAng.png";
import dRoumanie from "../assets/img/drapeaux/dRoum.png";
import dPortugal from "../assets/img/drapeaux/dPort.png";
import dArabe from "../assets/img/drapeaux/dAra.png";

import React, {useState} from 'react';



export const MainCarousel = (props) => {

    const {route, text, handleMenuClick, handleValidClick, showMini, showButton, inputType, inputValue, inputPlaceholder } = props;
    let [slideIndex, setSlideIndex] = useState(0);

    //TABLEAU DES LANGUES
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
        }
    ];


    //FONCTION SLIDE PRECEDENTE
    const previousSlide = (evt) => {
        if(slideIndex < 1){
            setSlideIndex(slideIndex=tabLangues.length -1);
        }else{
            setSlideIndex(slideIndex - 1)
        }
    }
    
    
    //FONCTION SLIDE SUIVANTE
    const nextSlide = (evt) => {
        if(slideIndex >= tabLangues.length -1){
            setSlideIndex(slideIndex = 0);
        }
        else{
            setSlideIndex(slideIndex + 1);
        }
    }


    return (
        <>
            <MyCarousel slideIndex={slideIndex} 
                        showButton={showButton} 
                        data={null} 
                        handleValidClick={handleValidClick} 
                        tabLangues={tabLangues} 
                        previousSlide={previousSlide} 
                        nextSlide={nextSlide} 
                        route={route} 
            />

            <div className="">
                <MiniFlag slideIndex={slideIndex} data={tabLangues} setSlideIndex={setSlideIndex} showMini={showMini}/>
            </div>
         </>
    );
}