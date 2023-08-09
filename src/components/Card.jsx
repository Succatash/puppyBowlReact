/* eslint-disable react/prop-types */

import img from '../assets/Labrador.jpeg';
import {useNavigate} from 'react-router-dom';

const Card = ({player}) => {
	let navigate = useNavigate();

	const removePlayer = async (playerId) => {
		try {
			await fetch(
				`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players/${playerId}`,
				{
					method: 'DELETE',
				}
			);
		} catch (err) {
			if (err) {
				throw new Error('Failed to delete the player');
			}
		}
	};

	return (
		<div className='card'>
			<div id='cardContainer'>
				<h2>{player.name}</h2>
			</div>

			<img src={img} alt='image of dog' />
			<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
				<button
					type='submit'
					className='delete-button'
					data-id={player.id}
					onClick={(e) => {
						e.preventDefault();
						removePlayer(player.id);
					}}
				>
					Delete
				</button>

				<button
					type='button'
					className='seeDetails'
					data-id={player.id}
					onClick={() => {
						navigate(`${player.id}`, {state: {id: player.id}});
					}}
				>
					see details
				</button>
			</div>
		</div>
	);
};
export default Card;
