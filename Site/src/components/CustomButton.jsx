export function CustomButton(props) {

    const {handleValidClick, text, route, className} = props;

    return ( 
        <>
            <button className={`btn ${className}`} onClick={handleValidClick.bind(this, route)}>{text}</button>
        </>
    );

}