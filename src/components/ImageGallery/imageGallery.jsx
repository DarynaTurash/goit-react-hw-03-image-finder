import { ImageGalleryItem } from "components/ImageGalleryItem/imageGalleryItem"

export const ImageGallery = ({ images }) => {
    return (
        <ul className="gallery">
            {images.map((image) => (
        <ImageGalleryItem key={image.id} id={image.id} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} />
      ))}
        </ul> 
    );
};




