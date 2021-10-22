import '../assets/css/carousel.css';


export const MiniFlag = (props) => {
    const {data, setSlideIndex, showMini} = props;

    const handleFlag = (index, evt) => {
        setSlideIndex(index);
    }

    if(showMini === true){
        return (
            <>
                {
                    //Boucle parcourant le tableau des drapeaux et permettant l'affichage
                    data.map((item, i) => {                     
                        const {text, imgSrc} = item;

                        return ( 
                            <span className="" key={i}>
                                <img src={imgSrc} alt={text}  className="miniflag" onClick={handleFlag.bind(this, i)} />
                            </span>
                        );
                    })
                }
            </>
        );
    }else{
        return null;
    }

}