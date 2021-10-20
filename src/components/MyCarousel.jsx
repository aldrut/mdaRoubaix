
//IMPORTS CAROUSEL
import { MyCarouselItem } from "./MyCarouselItem";
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {FaArrowAltCircleLeft} from 'react-icons/fa';

//IMPORTS DIVERS
import '../assets/css/carousel.css';


export const MyCarousel = (props) => {
    const {handleValidClick, tabLangues, previousSlide, nextSlide, slideIndex} = props;

    //RENVOI LE CAROUSEL
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
                    <button className="btn btn-success mt-5 btn-lg" onClick={handleValidClick.bind(this, "Formulaire")}>{tabLangues[slideIndex].btnValid}</button>
                </div>

            </div>
        </div>

    );

}