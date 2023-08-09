import Card from './Card';
import {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
const PlayerContainer = () => {
	const [Players, setPlayers] = useState([]);

	useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const response = await fetch(
					'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players'
				);
				const player = await response.json();
				setPlayers(player.data.players);
			} catch (err) {
				console.error('Uh oh, trouble fetching players!', err);
			}
		};
		fetchPlayers();
	}, []);

	return (
		<div id='all-players-container'>
			{Players.map((player) => {
				return <Card key={player.id} player={player} />;
			})}
		</div>
	);
};
export default PlayerContainer;
