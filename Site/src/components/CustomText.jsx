import {useState, useEffect} from 'react';


export function CustomText(props){
    const {question, id, type} = props;
    const [val, setValue] = useState('');
    const [select, setSelect] = useState([]);
    const [message,setMessage] = useState('');
    
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
        props.passedFunction(lastVal ? false : true);  
    },[id]);


    //MET EN LOCALSTORAGE LA DERNIERE VALEUR 
    const onChange = (evt) => {
        localStorage.setItem(id,evt.target.value);
        setValue(evt.target.value);
        // props.passedFunction(evt.target.value !== "" ? false : true); 
        props.passedFunction(evt.target.value !== "" || 
                            ((evt.target.type === "date" && evt.target.value >=0 && evt.target.value <=25 && evt.target.length <2 ) || 
                            (evt.target.type === "select")) ? false : true);  
    }


    //VERIFIER SI NBR DANS l'INPUT NUMBER
    // const onKeyUp = (evt) => {
    //     let result = Number.parseInt(evt.target.value);
    //     props.passedFunction(result ? false : true);  
    //     if(!result){
    //         setMessage("Veuillez saisir un nombre");
    //     }else{
    //         setMessage("");
    //     }  
    // } 

    //VERIFIER SI NBR DANS l'INPUT NUMBER
    const onKeyUp = (evt) => {
        let result = false;
        result = (isNaN(parseInt(evt.target.value)) ? false : true );
        props.passedFunction(result ? false : true );

        if(!result){
            setMessage("Veuillez saisir un nombre");
        }else{
            setMessage("");
        }
    }


    return(

        <div className="row enfants">
            <div className="">

                {/* AFFICHE LA QUESTION */}
                <div className="text-center h4">
                    {question}
                </div>
                
                {/* INPUT TEXT */}
                <input key={"key1_" + id} onChange={onChange} type="text" hidden={type !== "text"} min = "0" max="25" className="col-4 mt-3" value={val} ></input>
                
                {/* INPUT NUMBER */}
                <input key={"key3_" + id} onChange={onChange} onKeyUp={onKeyUp} type="text" hidden={type !== "number"} min = "0" max="25" className="col-4 mt-3" value={val} ></input>
                <div><label htmlFor="" className="text-danger fw-bold">{message} </label></div>

                {/* INPUT DATE (SELECT) */}
                <select key={"key2_" + id} onChange={onChange} name="select" hidden={type !== "date"} className="col-4 mt-3" value={val} type="select">
                    
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