import './CardList.css';

const CardList = ({ id, name, email }) => (
	<li className="card-list">
		<img
			src={`https://robohash.org/${id}?set=set2&size=180x180`}
			alt={`${name} pic`}
		/>
		<p>{name}</p> <p>{email}</p>
	</li>
);

export default CardList;
