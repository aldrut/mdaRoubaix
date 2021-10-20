import '../assets/css/carousel.css';


export const MiniFlag = (props) => {
    const {data, setSlideIndex} = props;

    const handleFlag = (index, evt) => {
        setSlideIndex(index);
    }

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

}