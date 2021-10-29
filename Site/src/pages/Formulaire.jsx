//IMPORTS CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/general.css';
import '../assets/css/formulaire.css';


//IMPORTS DIVERS
import { CustomButton } from '../components/CustomButton';
import { Navbar } from '../components/Navbar';
import { useState, useEffect } from 'react';
//useState met a jour un element
//useEffect lance une requete et continue d'executer sans attendre la demande (requete différée)

import ProgressBar from 'react-bootstrap/ProgressBar'
import  Axios from 'axios';
import { CustomRadio } from '../components/CustomRadio';
import { CustomText } from '../components/CustomText';
import { CustomLogin } from '../components/CustomLogin';



export function Formulaire(props) {
    
    const { handleValidClick, submitClick } = props;
    const [questionList, setQuestionList] = useState([]);
    let [currentQuestion, setCurrentQuestion] = useState(1);
    let count = questionList.length;

    useEffect(() => {
        // Axios.get('http://localhost:3001/api/GetAllQuestion').then((response) => {
        Axios.get('http://10.115.58.226:3001/api/GetAllQuestion').then((response) => {
            setQuestionList(response.data);
        });
    },[]
    );


    //FONCTION SLIDE PRECEDENTE
    const previousQuestion = (evt) => {
        if(currentQuestion === 1){
            // setCurrentQuestion(currentQuestion = questionList.length -1);
        }else{
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    
    //FONCTION SLIDE SUIVANTE
    const nextQuestion = (evt) => {
        if(currentQuestion === questionList.length){
            // <CustomLogin></CustomLogin>
        }else{
            setCurrentQuestion(currentQuestion +1);
            setButtonProps(true); 
        }
    }


    const [buttonProps, setButtonProps] = useState(true);
    // const [buttonProps, setButtonProps] = useState((!Object.keys(localStorage)) ? true : false);


    //FONCTION ENABLED BUTTON
    const enabledButton = (newValue) => {
        setButtonProps(newValue); 
    }

    // const [activeButton, setEnabledButton] = useState(enabledButton);
    

    return (
        <>
            <Navbar />
            <h1 className="mt-4">Questionnaire :</h1>

            {/* PROGRESS BAR */}
            <div className="mt-3 w-75 mx-auto"><ProgressBar now={currentQuestion*13} className='font-weight-bolder h1 bg-secondary' label={`${currentQuestion} / ${count}`} animated striped variant="danger"/></div>
            
            {/* QUESTIONNAIRE */}
            <div className="marginQuestion">
                {
                    questionList.map((item, idx) => {
                        if(item.ordre === currentQuestion){
                            let eltToDisplay = "";

                            switch (item.type) {
                                case "radio":
                                    eltToDisplay = (<CustomRadio key={idx} question={item.enonce} reponse1={item.reponse1} reponse2={item.reponse2} id={item.ordre} passedFunction={enabledButton} />);
                                    break;
                                case "text":
                                    eltToDisplay = (<CustomText question={item.enonce} key={idx} type={item.type} id={item.ordre} passedFunction={enabledButton} />);
                                    break;
                                case "date":
                                    eltToDisplay =(<CustomText question={item.enonce} key={idx} type={item.type} id={item.ordre} passedFunction={enabledButton} />);
                                    break;
                                case "number":
                                    eltToDisplay =(<CustomText question={item.enonce} key={idx} type={item.type} id={item.ordre} passedFunction={enabledButton} />);
                                    break;
                                default:
                                    eltToDisplay = "";
                                    break;
                            }
                            return eltToDisplay;
                        }
                        return "";
                    })
                }


                {/* BUTTONS */}
                <div className="form pt-5 size">
                    <div className="row justify-content-center">
                        <button onClick={previousQuestion} className="btn btn-danger mt-5 col-3" disabled={currentQuestion === 1}>Retour</button>
                        <div className="col-3"></div>

                        {/* BUTTONS VALIDER SELON QUESTIONS EN COURS */}
                        <button onClick={nextQuestion}text="Continuer" className="btn btn-success mt-5 col-3" disabled={buttonProps} hidden={currentQuestion === questionList.length}>Suivant</button>
                        <CustomButton onClick={nextQuestion} route="Login" handleValidClick={handleValidClick} text="Suivant" className={`btn btn-success mt-5 col-3 + ${currentQuestion < questionList.length ? "d-none" : ""}`} disabled={buttonProps}/>
                    </div>
                </div>


                {/* BTN A ENLEVER PLUS TARD */}
                {/* <CustomButton className="btn-warning mt-5" text="Page Login" route="Login" handleValidClick={handleValidClick}/> */}
            </div>

            <script src="../assets/js/formulaire.js"></script>
        </>
    );
}

