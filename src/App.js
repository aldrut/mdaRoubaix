//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/general.css';

//Import pages
import { Accueil, Formulaire, Home } from './pages';
import { useState } from 'react';



function App() {
	const [route, setRoute] = useState(window.history.state || 'Home')

    window.onpopstate = (evt) => {
        setRoute(window.history.state || 'Home')
    }

    const handleValidClick = (route) => {
        window.history.pushState(route, route);
        setRoute(route);
    }

	return (
		<div className="App">
			{route === "Home" && <Home handleValidClick={handleValidClick}/>} 
			{route === "Formulaire" && <Formulaire handleValidClick={handleValidClick}/>} 
			{route === "Accueil" &&  <Accueil/> }
		</div>
	);
}

export default App;
