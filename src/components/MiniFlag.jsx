import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";
import React, {useState} from 'react';

import '../assets/css/carousel.css';


export const MiniFlag = (props) => {

    const {data, setSlideIndex} = props;
    //let [slideIndex, setSlideIndex] = useState(0);


    const handleFlag = (index, evt) => {
        // let index = evt.key;
        // props.getKey(index);
        console.log(index);
        setSlideIndex(index);
    }

    return (
        <>
            {
                data.map((item, i) => {
                    const {text, imgSrc, link} = item;
                    return ( 
                    <span className="" key={i}>
                        <a href="#">
                            <img src={imgSrc} alt={text}  className="miniflag" onClick={handleFlag.bind(this, i)} />
                        </a>
                    </span>);
                })
            }
        </>
    );

}