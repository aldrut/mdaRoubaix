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
import  Axios from 'axios';
import { NavItem } from 'react-bootstrap';
import { CustomRadio } from '../components/CustomRadio';
import { CustomText } from '../components/CustomText';
import { CustomLogin } from '../components/CustomLogin';



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

    useEffect(() => {
        Axios.get('http://localhost:3001/api/GetAllQuestion').then((response) => {
            setQuestionList(response.data);
        });
    });


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
        if(currentQuestion === questionList.length){
            //setCurrentQuestion(currentQuestion = 0);
            <CustomLogin></CustomLogin>
        }
        else{
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    



    return (
        <>
            <Navbar />

            {
                questionList.map((item) => {

                    switch (item.type) {
                        case "radio":
                            return(<CustomRadio question={item.enonce} reponse1={item.reponse1} reponse2={item.reponse2} id={item.ordre} />);

                        case "text":
                            return(<CustomText question={item.enonce} reponse1={item.reponse1} />);

                        default:
                            return "";
                           
                    }
                    
                })
            }

                 <div className="form pt-5 size">
                    <div className="row justify-content-center">
                        <button onClick={previousQuestion} className="btn btn-danger mt-5 col-2" disabled={currentQuestion === 1}>Retour</button>
                        <div className="col-2"></div>
                        <button onClick={nextQuestion} className="btn btn-success mt-5 col-2">Suivant</button>
                    </div>
                </div>

            <script src="../assets/js/formulaire.js"></script>
        </>
    );
}

