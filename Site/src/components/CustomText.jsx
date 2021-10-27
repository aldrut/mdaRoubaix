import {useState, useEffect} from 'react';


export function CustomText(props){
    const {question, id, type} = props;
    const [val, setValue] = useState('');
    // const [val2, setValue2] = useState('');

    const [select, setSelect] = useState([]);

    
    // creation de la date actuelle
    let anneeActuel = new Date();
    anneeActuel = anneeActuel.getFullYear();
    
    //tableau de dates de naissance (date actuelle -100 ans)
    let tabAnnee = [];
    for(let i = 1 ; i<= 100 ; i++){
        tabAnnee.push((anneeActuel -12) - i);
    }

    
    //récupère en localstorage la dernière valeur
    useEffect(()=> {
        let lastVal = localStorage.getItem(id);
        if(lastVal != null) setValue(lastVal);
        setSelect(localStorage.getItem(id));

        // let lastVal2 = localStorage.getItem(id);
        // if(lastVal2 != null) setValue2(lastVal2);
        

        
    },[id]);


    //met en localstorage la dernière valeur
    const onChange = (evt) => {

        localStorage.setItem(id,evt.target.value);
        setValue(evt.target.value);

        // setValue2(evt.target.value);

        // console.log(val2);


    }


    return(
        
        <div className="row enfants">
            <div className="">

                {/* affiche la question */}
                <div className="text-center h4">
                    {question}
                </div>
                
                {/* input type text */}
                <input key={id} onChange={onChange} type="text" hidden={type === "date"} maxLength="2" className="col-4 mt-3" value={val}></input>
                
                {/* input type select (pour la date) */}
                <select key={id} onChange={onChange} name="select" hidden={type === "text"} className="col-4 mt-3" value={val}>
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