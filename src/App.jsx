import NewPlayerForm from './components/newPlayerForm';
import PlayerContainer from './components/playerContainer';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import SeeDetails from './components/seeDetails';

function App() {
	return (
		<>
			<h1 id='title'>Puppy Bowl React</h1>
			<nav id='navbar'>
				<Link to='/addPlayer'>Add a player</Link>
				<Link to='/players'>Players</Link>
				<Link to='/'>Home</Link>
			</nav>
			<Routes>
				<Route
					path='/'
					element={
						<div style={{margin: 'auto', textAlign: 'center'}}>
							<img
								style={{
									height: '80vh',
									width: '80vw',
									paddingTop: 15,
								}}
								src='src/assets/james-barker-v3-zcCWMjgM-unsplash.jpg'
								alt='picture of a dog'
							/>
						</div>
					}
				></Route>
				<Route path='/addPlayer' element={<NewPlayerForm />}></Route>
				<Route path='/players' element={<PlayerContainer />}></Route>
				<Route path='/players/:playerId' element={<SeeDetails />}></Route>
			</Routes>
		</>
	);
}

export default App;
