//IMPORTS CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORTS DIVERS
import { MainCarousel } from "../components/MainCarousel";


export function Home(props) {
    const {handleValidClick} = props;

    return ( 
        <>
            <div className="display-6 fw-bold col-10 mx-auto ">
                Maison Des Associations de Roubaix
            </div>

            <MainCarousel data={null} handleValidClick={handleValidClick} showMini={true} showButton={true} route="Formulaire" />

        </>
    );
}
