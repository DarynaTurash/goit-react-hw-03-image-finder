import css from "./buttonLoadMore.module.css";
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
    return (
        <div className={css.btnWrapper}>
        <button className={css.buttonLoadMore} type="button" onClick={onLoadMore}>Load more</button>
        </div>
    );
};

LoadMore.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};