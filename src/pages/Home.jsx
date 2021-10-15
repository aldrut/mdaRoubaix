import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";
import logo from "../assets/drapeaux/logomda.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import MyItem from "../assets/css/item";
import { CustomBtnRightArrow } from "../components/CustomBtnRightArrow";
import { CustomBtnLeftArrow } from "../components/CustomBtnLeftArrow";
import { CustomCarousel } from "../components/CustomCarousel";

export function Home() {
    const [Message, setMessage] = useState("");
    const [btnContent, setBtnContent] = useState("");
    const[thisEvt,setEvt] = useState("");

    const handleClick = (evt) => {
        switch (evt.currentTarget.name) {
            case "dFrance":
                setMessage("L'application sera en français");

                setBtnContent("Allez");
                setEvt('francais');
                break;

            case "dAnglais":
                setMessage("This application will be in english");
                setBtnContent("Go");
                setEvt('anglais');
                break;

            case "dPortugal":
                setMessage("esta aplicativo estará em português");
                setBtnContent("ir");
                setEvt('portugais')
                break;

            case "dRoumanie":
                setMessage("Această aplicație va fi tradusă în limba română");
                setBtnContent("A pleca");
                setEvt('roumain')
                break;

            case "dArabe":
                setMessage("وسيترجم هذا التطبيق إلى اللغة الرومانية.");
                setBtnContent("إبدأ");
                setEvt('arabe');
                break;

                default:
                    break;
        }
    };

    const handleGo = (evt) => {

        console.log(thisEvt);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col mt-4">
                        <img src={logo} className="align-items-center" width="150px" alt="logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        {/* <Carousel 
                        onPrevStart=    {
                            (currentPageIndex) => alert
                            (JSON.stringify(currentPageIndex.item.id)) 
                        }
                        
                        onNextStart=
                            {
                                (currentPageIndex) => alert
                                ( JSON.stringify(currentPageIndex.item.id)) 
                            }
                            
                        >
                       

                       <MyItem id="Fr"><img name="dFrance" src={dFrance} className="rounded-circle"  alt="France"onClick={handleClick} /></MyItem>

                          <MyItem id="En"><img name="dAnglais" src={dAngleterre} className="rounded" alt="United Kingdom" onClick={handleClick} /></MyItem>

                            <MyItem id="Pt"><img name="dPortugal" src={dPortugal} className="rounded" alt=""onClick={handleClick} /></MyItem>

                            <MyItem id="Ro" ><img name="dRoumanie" src={dRoumanie} className="rounded"  alt="..."onClick={handleClick} /></MyItem>

                            <MyItem  id="Ar"><img name="dArabe" src={dArabe} className="rounded"  alt="..."onClick={handleClick} /></MyItem> 
                        
                        </Carousel> */}
                    </div>
                </div>
                {Message && ( <div className="row"><div className="col"> {Message}</div></div>)}
            </div>
            <div className="row">
                <div className="col mt-5" onClick={handleGo}>
                    {/* <CustomButton classes="btn btn-warning" text={btnContent}></CustomButton> */}
                    
                    <CustomBtnLeftArrow />
                    <CustomBtnLeftArrow />
                    {btnContent}
                    <CustomBtnRightArrow />
                    <CustomBtnRightArrow />
                    
                   <CustomCarousel></CustomCarousel>
                </div>
            </div>
        </>
    );
}
