import GetArtworkButton from "./GetArtworkButton"

const Modal = ({ setModal }) => {

    const toggleModal = () => {
        console.log('toggleModal is running!')
        setModal(false)
    }

  return (
    <div className='modal' onClick={toggleModal}>
      <div className='modal__text'>
        <h1>Welcome to Docent!</h1>
        <p>Docent shows you random artworks from the collections of the Metropolitan Museum of Art, and the Art Institute of Chicago.</p>
        <p>Toggle between museum collections by using the tabs at the top of the page.</p>
        <button onClick={toggleModal}>Let's go!</button>
      </div>
    </div>
  )
}

export default Modal
