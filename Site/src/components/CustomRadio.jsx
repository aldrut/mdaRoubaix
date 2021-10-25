import { useState} from 'react';


export function CustomRadio(props) {
    const {reponse1, reponse2, question, id} = props;
    const [value, setValue] = useState('');

    return(
        <>
            <div className="row sectionRadio"  id={id}>
                <div className="col-11 h2 mx-auto">
                    {question}
                </div>

                <div className="row mt-4">
                    <div className="col-3 mx-auto">
                        <div className="form-check mx-auto">
                            <input onChange={(e)=>{setValue(e.target.value)}} className="form-check-input" type="radio" name={"reponse" + id} value={reponse1} />
                            
                            <label className ="form-check-label h4" >{reponse1}</label>
                        </div>
                    </div>

                    <div className="col-3 mx-auto">
                        <div className="form-check mx-auto">
                            <input onChange={(e)=>{setValue(e.target.value)}} className="form-check-input" type="radio" name={"reponse" + id} id={reponse2} value={reponse2} />
                            
                            <label className ="form-check-label h4" for="exampleRadios2">
                                {reponse2}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}