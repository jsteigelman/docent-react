const ArtworkImage = () => {
  const artworkImageStyle = {
    backgroundColor: '#F8F5F9',
    flex: 1,
    height: '100%',
    width: '100%',
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
    <div style={artworkImageStyle}>
        <div className="imageContainer--text"></div>
      <div className='imageContainer' style={imageContainerStyle}></div>
    </div>
  )
}

export default ArtworkImage
