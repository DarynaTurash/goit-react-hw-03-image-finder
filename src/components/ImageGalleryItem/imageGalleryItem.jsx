import { Modal } from "components/Modal/modal";
import { Component } from "react";
import css from "./imageGalleryItem.module.css";



export class ImageGalleryItem extends Component {

    state = {
        isOpenModal: false,
        largeImage: "", 
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    
    handleKeyDown = (e) => {
        if (e.key === "Escape") {
            this.handleCloseModal();
        }
    };

    handleBackdropClose = (e) => {
        if(e.currentTarget === e.target) {
            this.handleCloseModal();
        }
    }

    handleOpenModal = (largeImageURL) => {
        this.setState({
            isOpenModal: true,
            largeImageURL: largeImageURL, 
        });
    };

    handleCloseModal = (e) => {
        this.setState({
                isOpenModal: false,
                largeImageURL: "", 
            });
    };

    render() {
        const {id, webformatURL, largeImageURL} = this.props;
        const { isOpenModal, largeImage } = this.state;

        return (
            <li className={css.galleryItem} key={id}>
                <img className={css.galleryItemImage} src={webformatURL} alt="" onClick={() => this.handleOpenModal(largeImageURL)} />
                {isOpenModal && (
                    <Modal largeImage={largeImage} onCloseModal={this.handleBackdropClose} />
                )}
            </li>
        )
    };
};



