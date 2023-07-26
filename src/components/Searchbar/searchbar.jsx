import css from "./searchBar.module.css";
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit, value, onChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(); 
    };

    return (
        <header className={css.searchbar}>
            <form className={css.form}>
                <button type="submit" className={css.button} onClick={handleSubmit}>
                    <span className={css.buttonLabel}>Search</span>
                </button>

                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={onChange}
                />
            </form>
            </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


