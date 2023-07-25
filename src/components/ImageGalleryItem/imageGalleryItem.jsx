import { Modal } from "components/Modal/modal";
import { Component } from "react";



export class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
        largeImageURL: "", 
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
        console.log(this.props);
        return (
            <li className="gallery-item" key={id}>
                <img src={webformatURL} alt="" onClick={() => this.handleOpenModal(largeImageURL)} />
                {this.state.isOpenModal && (
                    <Modal largeImage={this.state.largeImageURL} closeModal={this.handleBackdropClose} />
                )}
            </li>
        )
    };
};



