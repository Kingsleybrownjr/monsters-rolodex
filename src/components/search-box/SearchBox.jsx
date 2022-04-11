import './SearchBox.css'

const SearchBox = ({ onChangeHandler, value, type, placeholder }) => {
	return (
		<input
			className="search-box"
			value={value}
			onChange={onChangeHandler}
			type={type}
			placeholder={placeholder}
		/>
	);
};
export default SearchBox;
