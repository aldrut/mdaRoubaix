import {useState, useEffect} from 'react';


export function CustomText(props){
    const {question, id, type} = props;
    const [val, setValue] = useState('');
    const [select, setSelect] = useState([]);
    
    //CREATION DATE ACTUELLE 
    let anneeActuel = new Date();
    anneeActuel = anneeActuel.getFullYear();
    
    //TABLEAU DATES DE NAISSANCES (DATE ACTUELLE -100 ANS) 
    let tabAnnee = [];
    for(let i = 1 ; i<= 100 ; i++){
        tabAnnee.push((anneeActuel -12) - i);
    }


    //RECUPERE EN LOCALSTORAGE LA DERNIER VALEUR 
    useEffect(()=> {
        let lastVal = localStorage.getItem(id);
        if(lastVal != null) setValue(lastVal);
        setSelect(localStorage.getItem(id));  
        props.passedFunction(lastVal === "" ? true :false);
    },[id]);

    //MET EN LOCALSTORAGE LA DERNIERE VALEUR 
    const onChange = (evt) => {
        localStorage.setItem(id,evt.target.value);
        setValue(evt.target.value);
        props.passedFunction(evt.target.value !== "" ? true :false);  
    }



    return(
        
        <div className="row enfants">
            <div className="">

                {/* AFFICVHE LA QUESTION */}
                <div className="text-center h4">
                    {question}
                </div>
                
                {/* INPUT TEXT */}
                <input key={"key1_" + id} onChange={onChange} type="text" hidden={type === "date"} maxLength="2" className="col-4 mt-3" value={val}></input>
                
                {/* INPUT SELECT (POUR LA DATE DE NAISSANCE) */}
                <select key={"key2_" + id} onChange={onChange} name="select" hidden={type === "text"} className="col-4 mt-3" value={val}>
                    {/* boucle affichant les dates dans les options du select */}
                    {
                        tabAnnee.map((item, i) => {
                            return (<option key={i} > {item} </option>);
                        })
                    }
                </select>

            </div>
        </div>
        
    );



}