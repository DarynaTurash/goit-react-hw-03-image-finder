import css from "./modal.module.css"; 
import PropTypes from 'prop-types';

export const Modal = ({ largeImage, onCloseModal }) => {
return (
<div className={css.overlay} onClick={onCloseModal}>
  <div className={css.modal}>
    <img src={largeImage} alt="" />
  </div>
</div>
);
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};