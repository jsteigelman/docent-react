const GetArtworkButton = ({ museum, changeApi }) => {

    // const getApi = museum === 'Met' ? () => changeApi('Met') : () => changeApi('AIC')

    const handleClick = () => {
      museum === 'Met' ? changeApi('Met') : changeApi('AIC')
      window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div className='getArtworkButtonContainer'>
        <button className='getArtworkButton' onClick={handleClick}>
          Show me another work
        </button>
        <p id='sendEmailLink'>
          <a id='emailLink'>Email a link to this artwork</a>
        </p>
      </div>
    )
}

export default GetArtworkButton