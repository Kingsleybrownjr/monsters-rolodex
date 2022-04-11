import { useEffect, useState } from 'react';

import './App.css';

import Card from './components/card/Card';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		getMonsters();
	}, []);

	const getMonsters = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();

		setMonsters(data);
	};

	const onSearchChange = e => setSearchField(e.target.value.toLowerCase());

	return (
		<div className="container">
			<h1 className="page-title">Monsters Inc.</h1>

			<div className='search-element'>
				<SearchBox
					value={searchField}
					onChangeHandler={onSearchChange}
					type="search"
					placeholder="Search monsters..."
				/>
			</div>

			<Card monsters={monsters} searchField={searchField} />
		</div>
	);
};
export default App;
