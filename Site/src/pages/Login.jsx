import { Navbar } from '../components/Navbar.jsx';
import '../assets/css/general.css';
import '../assets/css/login.css';
import { BsFillPersonFill} from 'react-icons/bs'
import { AiFillLock} from 'react-icons/ai'


export function Login() {

    return (
        <>
            <Navbar />

                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <h1 className="fw-bolder text-light">Connexion</h1>

                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    {/* LOGIN */}
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><BsFillPersonFill className="icones mt-15px w-75 h-75 my-auto mx-auto"></BsFillPersonFill></span> 
                                        </div>
                                        <input type="text" name="" className="form-control input_user" value="" placeholder="username"/>
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><AiFillLock className="icones mt-15px w-75 h-75 my-auto mx-auto"></AiFillLock></span> 
                                        </div>
                                        <input type="password" name="" className="form-control input_pass" value="" placeholder="password"/>
                                    </div>

                                    {/* REMEMBER */}
                                    <div className="form-group mt-5">
                                        {/* <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                            <label className ="custom-control-label" >Remember me</label>
                                        </div> */}
                                    </div>

                                    {/* BUTTON LOGIN */}
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button type="button" name="button" className="btn login_btn">Connexion</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );


}