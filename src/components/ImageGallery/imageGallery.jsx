import { ImageGalleryItem } from "components/ImageGalleryItem/imageGalleryItem";
import css from "./imageGallery.module.css";
import PropTypes from 'prop-types';


export const ImageGallery = ({ images }) => {
    return (
      <ul className={css.gallery}>
        {images.map((image) => (
        <ImageGalleryItem key={image.id} id={image.id} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} />
        ))}
      </ul> 
      );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  )
}




