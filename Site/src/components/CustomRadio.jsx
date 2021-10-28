import { useEffect, useState} from 'react';


export function CustomRadio(props) {
    const {reponse1, reponse2, question, id} = props;
    const [val, setValue] = useState('');


    //RECUPERE EN LOCALSTORAGE LA DERNIERE VALEUR 
    useEffect(()=> {
        let lastVal = localStorage.getItem(id);
        if(lastVal != null) setValue(lastVal);
        props.passedFunction(lastVal === "" ? true :false);
    },[id]);


    //MET EN LOCALSTORAGE LA DERNIERE VALEUR 
    const onChange = (evt) => {
        localStorage.setItem(id,evt.target.value);
        setValue(evt.target.value);
        props.passedFunction(evt.target.value !== "" ? true :false);
    }


    return(
        <div className="row sectionRadio" id={id}>
            {/* AFFICHE LA QUESTION */}
            <div className="col-11 h2 mx-auto">
                {question}
            </div>

            <div className="row mt-4">
                <div className="col-3 mx-auto">
                    <div className="form-check mx-auto">
                        {/* INPUT Q.1 SE COCHE OU PAS SELON LA REP. STOQUE EN LOCALSTORAGE */}
                        <input onChange={onChange} className="form-check-input" type="radio" name={"reponse" + id} value={reponse1}  checked={(val === reponse1)} />
                        
                        <label className ="form-check-label h4" >
                            {reponse1}
                        </label>
                    </div>
                </div>

                <div className="col-3 mx-auto">
                    <div className="form-check mx-auto">
                        {/* INPUT Q. SE COCHE OU PAS SELON LA REP. STOQUE EN LOCALSTORAGE */}
                        <input onChange={onChange} className="form-check-input" type="radio" name={"reponse" + id} value={reponse2} checked={(val === reponse2)} />
                        
                        <label className ="form-check-label h4">
                            {reponse2}
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
}