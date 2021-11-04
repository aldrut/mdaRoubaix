import { Navbar } from '../components/Navbar.jsx';
import '../assets/css/general.css';
import '../assets/css/login.css';
import { BsFillPersonFill} from 'react-icons/bs'
import { AiFillLock, AiOutlineRetweet} from 'react-icons/ai'

import { useState, useEffect } from 'react';
import  Axios from 'axios';
// import  bcrypt from 'bcrypt';



export function Login() {

    const [mail, setMail] = useState([]);
    const [password, setPassword] = useState([]);
    // const rounds = 10;

    //CONNEXION
    const onClick = () => {
        // let passwordHashed = '';
        // let mailHashed = '';
        // let flag1 = false;
        // let flag2 = false;
        // let msgPass = "";
        // let msgMail ="";

        // bcrypt.hash(password, rounds, (err, hash) => {
        //     if(err){
        //         flag1 = false;
        //         msgPass = err;
        //         return;
        //     }else{
        //         passwordHashed = hash;
        //         flag1= true;
        //     }
        // });

        // bcrypt.hash(mail, rounds, (err, hash) => {
        //     if(err){
        //         mailHashed = '';
        //         flag2=false;
        //         msgMail = err;
        //         return;
        //     }else{
        //         mailHashed = hash;
        //         flag2=true;
        //     }
        // });


        // if(flag1 === true && flag2 === true) {
            Axios.post(`http://10.115.58.226:3001/api/connexion`, {password:password, mail:mail}).then((response) => {
                let result = response.data; 
                console.log(result); 
            });
        // }else{
        //     console.log(msgMail + " / " + msgPass);
        // }
        
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