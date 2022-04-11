import close_image_icon from './../images/close_image_icon.png'

const ImageModal = ({ imageModal, setImageModal }) => {
  const hideImage = {
    display: 'none',
  }

  const showImage = {
    display: 'flex',
  }

  const modalStyle = imageModal ? showImage : hideImage

  const toggleModal = () => {
    setImageModal(!imageModal)
  }

  return (
    <div className='imageModalContainer' onClick={toggleModal} style={modalStyle}>
        <img id="closeIcon" src={close_image_icon} alt="collapse image icon" />
        <div className='imageModal'></div>
    </div>
  )
}

export default ImageModal
