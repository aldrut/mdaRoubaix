//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/general.css'

//Import pages
import { Home } from './pages/Home';



function App() {
	return (
		<div className="App">
			<Home/>
		</div>
	);
}

export default App;
