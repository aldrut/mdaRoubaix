import { useState} from 'react';

export function CustomLogin(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return(
        <>
            <div className="row enfants">
                <div className="mt-4">
                    <div className="text-center h4">
                       Inscription
                    </div>
                        
                        <div>
                            <label for="email">Saisissez votre mail</label>
                            <input type="email" id="email" name="email" onChange={((e) =>{setEmail(e.target.value)})} ></input>
                        </div>
                        <div>
                            <label for="password">Saisissez votre mot de passe</label>
                            <input type="password" id="password" name="password" onChange={((e) =>{setPassword(e.target.value)})} ></input>
                        </div>
                    {/* <input onChange={(e)=>{setValue(e.target.value)}} type="text" min="0" max="20" maxLength="2" className="col-4 mt-3"/> */}
                </div>
            </div>
        </>
    );



}