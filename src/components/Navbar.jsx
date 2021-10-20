import '../assets/css/navbar.css';
import logo from "../assets/img/logo.png";
import { BsFillPersonFill } from 'react-icons/bs'

export const Navbar = (props) => {
    const { handleRouterClick } = props;

    return (

        <nav className="navbar navbar-dark bgNavbar row">
            <div className="d-flex">
                {/* logo */}
                <div className="col-3 mt-1">
                    <img src={logo} alt="logo MDA" className="w-75"/>
                </div>

                {/* barre de recherche */}
                <div className="col-6">
                    <div className="form-control h-75 mt-1" type="search" placeholder="Rechercher"></div>
                </div>

                {/* Profil */}
                <div className="col-3">
                    <BsFillPersonFill className="text-light avatar"/>
                </div>
            </div>
        </nav>

    );



}