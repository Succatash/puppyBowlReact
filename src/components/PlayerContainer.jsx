import Card from './Card';
import {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
const PlayerContainer = ({input}) => {
	const [Players, setPlayers] = useState([]);
	const [sortedData, setSortedData] = useState([]);

	useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const response = await fetch(
					'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players'
				);
				const player = await response.json();
				setPlayers(player.data.players);
				setSortedData(
					player.data.players.filter((el) =>
						el.name.toLowerCase().includes(input)
					)
				);
			} catch (err) {
				console.error('Uh oh, trouble fetching players!', err);
			}
		};

		fetchPlayers();
	}, [input]);

	return (
		<>
			{sortedData.length === 0 ? (
				<div id='all-players-container'>
					{Players.map((player) => {
						return <Card key={player.id} player={player} />;
					})}
				</div>
			) : (
				<div id='all-players-container'>
					{sortedData.map((player) => {
						return (
							<>
								<Card key={player.id + 1} player={player} />
							</>
						);
					})}
				</div>
			)}
		</>
	);
};

export default PlayerContainer;
