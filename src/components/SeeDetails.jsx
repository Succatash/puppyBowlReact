import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
export default function SeeDetails() {
	const location = useLocation();
	const [singlePlayerInfo, setSinglePlayerInfo] = useState({});
	const singlePlayer = async (playerId) => {
		let res = await fetch(
			`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/players/${playerId}`
		);
		let data = await res.json();
		setSinglePlayerInfo(data.data.player);
	};

	useEffect(() => {
		singlePlayer(location.state.id);
	}, [location.state.id]);

	return (
		<>
			<div id='seeDetailsContainer'>
				<img
					src={singlePlayerInfo.imageUrl}
					alt='picture of a dog waging its tail'
				/>
				<p>Name:{singlePlayerInfo.name}</p>
				<p>Breed:{singlePlayerInfo.breed}</p>
				<p>Status:{singlePlayerInfo.status}</p>
			</div>
		</>
	);
}
