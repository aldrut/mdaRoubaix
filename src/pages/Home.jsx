import dFrance from "../assets/drapeaux/dFr.png";
import dAngleterre from "../assets/drapeaux/dAng.png";
import dRoumanie from "../assets/drapeaux/dRoum.png";
import dPortugal from "../assets/drapeaux/dPort.png";
import dArabe from "../assets/drapeaux/dAra.png";
import logo from "../assets/drapeaux/logomda.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import myItem from "../assets/css/item";
import { CustomBtnRightArrow } from "../components/CustomBtnRightArrow";
import { CustomBtnLeftArrow } from "../components/CustomBtnLeftArrow";

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
                        <img src={logo} class="align-items-center" width="150px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <Carousel 
                        // onPrevStart=    {
                        //     (currentPageIndex) => alert
                        //     (JSON.parse(currentPageIndex)) 
                        // }
                        
                        // onNextStart=
                        //     {
                        //         (currentPageIndex) => alert
                        //         ( JSON.parse(currentPageIndex)) 
                        //     }
                            
                        >
                            
                        {/* <myItem id="Fr">FRANCE</myItem>
                        <myItem id="En">ANGLETERRE</myItem> */}

                        <myItem id="Fr"><img name="dFrance" src={dFrance} class="rounded-left"  alt="France"onClick={handleClick} /></myItem>

                          <myItem id="En"><img name="dAnglais" src={dAngleterre} class="rounded" alt="United Kingdom" onClick={handleClick} /></myItem>

                            <myItem  someProp="cool3"><img name="dPortugal" src={dPortugal} class="rounded" alt=""onClick={handleClick} /></myItem>

                            <myItem someProp="cool4" ><img name="dRoumanie" src={dRoumanie} class="rounded"  alt="..."onClick={handleClick} /></myItem>

                            <myItem  someProp="cool5"><img name="dArabe" src={dArabe} class="rounded"  alt="..."onClick={handleClick} /></myItem> 
                        
                        </Carousel>
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
                    
                   
                </div>
            </div>
        </>
    );
}
