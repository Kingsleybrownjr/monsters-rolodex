import CardList from '../card-list/CardList';

import './Card.css'

const Card = ({ monsters, searchField }) => {
	const renderCardInfo = () =>
		monsters.map(monster => {
			const { id, name, email } = monster;
			if (name.toLowerCase().includes(searchField))
				return <CardList key={id} id={id} name={name} email={email} />;
		});

	return <ul className='card'>{renderCardInfo()}</ul>;
};
export default Card;
