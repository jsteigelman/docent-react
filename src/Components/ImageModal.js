const ImageModal = ({imageModal, setImageModal}) => {

    const hideImage = {
        display: 'none'
    }

    const showImage = {
        display: 'flex'
    }

    const modalStyle = imageModal ? showImage : hideImage

    const toggleModal = () => {
        setImageModal(!imageModal)
    }

    return (
        <div className="imageModal" style={modalStyle} onClick={toggleModal}>
        </div>
    )
}

export default ImageModal