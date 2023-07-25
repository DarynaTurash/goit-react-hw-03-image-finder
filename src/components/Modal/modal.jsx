import css from "./modal.module.css"; 

export const Modal = ({ largeImage, closeModal }) => {
return (
<div className={css.overlay} onClick={closeModal}>
  <div className={css.modal}>
    <img src={largeImage} alt="" />
  </div>
</div>
);
}