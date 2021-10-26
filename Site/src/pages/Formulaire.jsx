//IMPORTS CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/general.css';
import '../assets/css/formulaire.css';


//IMPORTS DIVERS
import { MainCarousel } from '../components/MainCarousel';
import { CustomButton } from '../components/CustomButton';
import { Navbar } from '../components/Navbar';
import { useState, useEffect } from 'react';
//useState met a jour un element
//useEffect lance une requete et continue d'executer sans attendre la demande (requete différée)

import ProgressBar from 'react-bootstrap/ProgressBar'
import  Axios from 'axios';
import { NavItem } from 'react-bootstrap';
import { CustomRadio } from '../components/CustomRadio';
import { CustomText } from '../components/CustomText';
import { CustomLogin } from '../components/CustomLogin';
import DatePicker from 'react-date-picker';



export function Formulaire(props) {
    
    const { handleValidClick, submitClick } = props;
    const [sexe, setSexe] = useState('');
    const [enfants, setEnfants] = useState('');
    const [etudiant, setEtudiant] = useState('');
    const [chomage, setChomage] = useState('');
    const [retraite, setRetraite] = useState('');
    const [sdf, setSdf] = useState('');
    const [handicap, setHandicap] = useState('');
    const [anniv, setAnniv] = useState('');
    const [questionList, setQuestionList] = useState([]);
    let [currentQuestion, setCurrentQuestion] = useState(1);
    let count = questionList.length;

    useEffect(() => {
        Axios.get('http://localhost:3001/api/GetAllQuestion').then((response) => {
            setQuestionList(response.data);
        });
    },[]
    
    );


    // const submitClick = () =>{

    // }



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
        // console.log(evt.currenttarget.value);
        if(currentQuestion === questionList.length){
            <CustomLogin></CustomLogin>
            
        }

        else{
            setCurrentQuestion(currentQuestion +1);
        }
    }
    
    
    


    return (
        <>
            <Navbar />
            <h1 className="mt-4">Questionnaire :</h1>

            {/* progress Bar */}
            <div className="mt-3 w-75 mx-auto"><ProgressBar now={currentQuestion*13} className='font-weight-bolder h1 bg-secondary' label={`${currentQuestion} / ${count}`} animated striped variant="danger"/></div>
            
            {/* questionnaire */}
            <div className="marginQuestion">
                {
                    questionList.map((item) => {
                        if(item.ordre === currentQuestion){

                            switch (item.type) {
                                case "radio":
                                    return(<CustomRadio key={item.id} question={item.enonce} reponse1={item.reponse1} reponse2={item.reponse2} id={item.ordre} />);

                                case "text":
                                    return(<CustomText question={item.enonce} key={item.id} type={item.type} />);

                                case "date":
                                    return(<CustomText question={item.enonce} key={item.id} type={item.type} />);

                                default:
                                    return "";
                            }
                        }
                        return "";
                    })
                }

                {/* buttons */}
                <div className="form pt-5 size">
                    <div className="row justify-content-center">
                        <button onClick={previousQuestion} className="btn btn-danger mt-5 col-3" disabled={currentQuestion === 1}>Retour</button>
                        <div className="col-3"></div>
                        <button onClick={nextQuestion} className="btn btn-success mt-5 col-3">Suivant</button>
                    </div>
                </div>
            </div>

            <script src="../assets/js/formulaire.js"></script>
        </>
    );
}

