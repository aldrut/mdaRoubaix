import { useState} from 'react';

export function CustomText(props){

    const [value, setValue] = useState('');


    return(
        <>
            <div className="row enfants d-none">
                <div className="mt-4">
                    <div className="text-center h4">
                        Combien avez vous d'enfants ?
                    </div>
                        
                    <input onChange={(e)=>{setValue(e.target.value)}} type="text" min="0" max="20" maxLength="2" className="col-4 mt-3"/>
                </div>
            </div>
        </>
    );



}