import ImageModal from './ImageModal'

const ArtworkImage = ({ imageModal, setImageModal }) => {
  const artworkImageStyle = {
    backgroundColor: '#F8F5F9',
    flex: 1,
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }

  const imageContainerStyle = {
    boxSizing: 'border-box',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%'

  }

  return (
    <div className="containerLeft" style={artworkImageStyle} onClick={() => setImageModal(!imageModal)}>
        <div className="imageContainer--text"></div>
      <div className='imageContainer' style={imageContainerStyle}></div>
    </div>
  )
}

export default ArtworkImage
