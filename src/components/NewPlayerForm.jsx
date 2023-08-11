import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const NewPlayerForm = () => {
	let navigate = useNavigate();

	const [newPlayer, setNewPlayer] = useState({});

	const addNewPlayer = async (playerObj) => {
		try {
			await fetch(
				'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players',
				{
					method: 'POST',
					body: JSON.stringify(playerObj),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);
		} catch (err) {
			throw new Error(
				'Oops, something went wrong with adding that player!',
				err
			);
		}
	};

	useEffect(() => {
		addNewPlayer(newPlayer);
	}, [newPlayer]);

	return (
		<>
			<form
				id='new-player-form'
				onSubmit={(e) => {
					e.preventDefault();

					setNewPlayer({
						name: e.target.name.value,
						breed: e.target.breed.value,
						imageUrl: e.target.imageURL.value,
						status: () => {
							if (e.target.status.value === 'field') {
								return 'field';
							} else {
								return 'bench';
							}
						},
					});
					setTimeout(() => {
						e.target.reset();
					}, 1),
						//need to get it to link to players page onSubmit
						setTimeout(() => navigate('/', {state: newPlayer}), 500);
					//reset the form inputs to empty
				}}
			>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' autoFocus />
				<label htmlFor='breed'>Breed</label>
				<input type='text' name='breed' id='breed' />
				<label htmlFor='imageURL'>Image</label>
				<input type='url' name='imageURL' id='imageURL' />
				<div id='radioBox'>
					<div style={{marginTop: 20}}>
						<label htmlFor='field'>fielded</label>
						<input type='radio' name='status' id='field' value='field' />
					</div>

					<div style={{marginTop: 20}}>
						<label htmlFor='bench'>benched</label>
						<input type='radio' name='status' id='bench' value='bench' />
					</div>
				</div>
				<label htmlFor='Submit'></label>

				<button type='submit' className='submit-button' name='Submit'>
					Submit
				</button>
			</form>
		</>
	);
};

export default NewPlayerForm;
