import NewPlayerForm from './components/NewPlayerForm';
import PlayerContainer from './components/PlayerContainer';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import SeeDetails from './components/SeeDetails';
import {useState} from 'react';

function App() {
	const [input, setInput] = useState('');

	return (
		<>
			<form action='' style={{paddingLeft: '42%', paddingTop: 10}}>
				<label htmlFor='searchBar' />
				<input
					type='search'
					name='searchBar'
					placeholder='searchHere'
					onChange={(e) => {
						setInput(e.target.value);
					}}
					style={{width: 200, borderRadius: '10'}}
				/>
			</form>

			<h1 id='title'>Puppy Bowl React</h1>
			<nav id='navbar'>
				<Link to='/addPlayer'>Add a player</Link>
				<Link to='/'>Players</Link>
			</nav>
			<Routes>
				<Route
					path='/'
					element={
						<div style={{margin: 'auto', textAlign: 'center'}}>
							<PlayerContainer input={input} />
						</div>
					}
				></Route>
				<Route path='/addPlayer' element={<NewPlayerForm />}></Route>
				<Route path='/:playerId' element={<SeeDetails />}></Route>
			</Routes>
		</>
	);
}

export default App;
