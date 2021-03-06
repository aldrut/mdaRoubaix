export const MyCarouselItem = (props) =>{

    // const {lang, imgSrc, text, desc, visible, inputType, inputValue, inputPlaceholder} = props;
    const {lang, imgSrc, text, desc, visible} = props;

    return (
        <div className={"carousel-item slide" + (visible ? " d-block" : "")} name={lang}>

            <img src={imgSrc} className="d-block w-50 mx-auto" alt={lang} />
            {/* {inputType ?? <input type={inputType} value={inputValue} placeholder={inputPlaceholder}/>} */}

            <div>
                <h3 className="text-dark mt-2">{text}</h3>
                <p className="text-dark">{desc}</p>
            </div>
        </div>
    );
}

