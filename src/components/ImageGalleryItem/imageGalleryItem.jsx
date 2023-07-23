
export const ImageGalleryItem = ({ id, webformatURL }) => {
    return (
        <li className="gallery-item" key={id}>
            <img src={webformatURL} alt="" />
        </li>
    )
};

