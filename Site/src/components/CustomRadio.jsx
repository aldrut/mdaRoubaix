import { useEffect, useState} from 'react';


export function CustomRadio(props) {
    const {reponse1, reponse2, question, id} = props;
    const [val, setValue] = useState('');
    
    //récupère en localstorage la dernière valeur
    useEffect(()=> {
        let lastVal = localStorage.getItem(id);
        if(lastVal != null) setValue(lastVal);
    },[id]);

    //met en localstorage la dernière valeur
    const onChange = (evt) => {
        localStorage.setItem(id,evt.target.value);
        setValue(evt.target.value);
    }


    return(
        <div className="row sectionRadio" id={id}>
            {/* affiche la question */}
            <div className="col-11 h2 mx-auto">
                {question}
            </div>

            <div className="row mt-4">
                <div className="col-3 mx-auto">
                    <div className="form-check mx-auto">
                        {/* input de la reponse n°1 qui se check ou pas selon la réponse stoqué en localstorage */}
                        <input onChange={onChange} className="form-check-input" type="radio" name={"reponse" + id} value={reponse1}  checked={(val === reponse1)} />
                        
                        <label className ="form-check-label h4" >
                            {reponse1}
                        </label>
                    </div>
                </div>

                <div className="col-3 mx-auto">
                    <div className="form-check mx-auto">
                        {/* input de la reponse n°2 qui se check ou pas selon la réponse stoqué en localstorage */}
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