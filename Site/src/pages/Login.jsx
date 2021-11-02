import { Navbar } from '../components/Navbar.jsx';
import '../assets/css/general.css';
import '../assets/css/login.css';
import { BsFillPersonFill} from 'react-icons/bs'
import { AiFillLock, AiOutlineRetweet} from 'react-icons/ai'

import { useState, useEffect } from 'react';
import  Axios from 'axios';


export function Login() {

    const [mail, setMail] = useState([]);
    const [password, setPassword] = useState([]);

    //CONNEXION
    const onClick = () => {
        Axios.get(`http://10.115.58.226:3001/api/connexion/${mail}`).then((response) => {
            setMail(response.data);
            let result = response.data[0];
            console.log(result);
            
            // if(response.data.length === 0 ){
            //     alert("cet email n'existe pas");
            // }else if(result.mail === mail && result.mdp !== password){
            //     alert("mdp incorect");
            // }else{
            //     alert("connexion ok");
            // }
        });
    }
    
    //CONNEXION
    // const onClick = () => {
    //     Axios.get(`http://10.115.58.226:3001/api/connexion/${mail}`).then((response) => {
    //         setMail(response.data);
    //     });
    // }



    return (
        <>
            <Navbar />

                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <h1 className="fw-bolder text-light mt-2">Connexion</h1>

                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    {/* LOGIN */}
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><BsFillPersonFill className="icones mt-15px w-75 h-75 my-auto mx-auto"></BsFillPersonFill></span> 
                                        </div>
                                        <input onChange={(e)=>{setMail(e.target.value);}} type="text" className="form-control input_user" placeholder="email"/>
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><AiFillLock className="icones mt-15px w-75 h-75 my-auto mx-auto"></AiFillLock></span> 
                                        </div>
                                        <input onChange={(e)=>{setPassword(e.target.value);}} type="password" name="password" className="form-control input_pass" placeholder="password"/>
                                    </div>

                                    {/* REMEMBER */}
                                    <div className="form-group mt-5">
                                    <button onClick={onClick} type="button" name="button" className="btn text-light" route="Inscription">Inscription</button>
                                        {/* <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                            <label className ="custom-control-label" >Remember me</label>
                                        </div> */}
                                    </div>

                                    {/* BUTTON LOGIN */}
                                    <div className="d-flex justify-content-center my-3 login_container">
                                        <button onClick={onClick} type="button" name="button" className="btn login_btn">Connexion</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );


}