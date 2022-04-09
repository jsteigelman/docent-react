const GetArtworkButton = ({ museum, changeApi }) => {

    const getApi = museum === 'Met' ? () => changeApi('Met') : () => changeApi('AIC')

    return (
        <div className='getArtworkButtonContainer'>
        <button className='getArtworkButton' onClick={getApi}>
          Show me another work
        </button>
        <p id='sendEmailLink'>
          <a id='emailLink'>Email a link to this artwork</a>
        </p>
      </div>
    )
}

export default GetArtworkButton