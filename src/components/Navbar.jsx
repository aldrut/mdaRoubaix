import '../assets/css/navbar.css';
import logo from "../assets/img/logo.png";
import { BsFillPersonFill } from 'react-icons/bs'

export const Navbar = (props) => {
    const { handleRouterClick } = props;

    return (

        <nav class="navbar navbar-dark bgNavbar row">
            <div className="d-flex">
                {/* logo */}
                <div class="col-3 mt-1">
                    <img src={logo} alt="logo MDA" class="w-75"/>
                </div>

                {/* barre de recherche */}
                <div class="col-6">
                    <div class="form-control h-75 mt-1" type="search" placeholder="Rechercher"></div>
                    {/* <button class="btn btn-outline-light text-light col-5" type="submit">Chercher</button> */}
                </div>

                {/* Profil */}
                <div className="col-3">
                    <BsFillPersonFill className="text-light avatar"/>
                </div>
            </div>
        </nav>

    );



}