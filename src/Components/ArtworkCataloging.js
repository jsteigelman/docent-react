import getMetRecord from './../requests/metApi'

const ArtworkCataloging = ({ setApi, changeApi, api }) => {

  return (
    <div className="outerCaptionContainer">
      <div className='captionArtistContainer'>
        <h1 id='captionContainer--artistName'></h1>
        <h3 id='captionContainer--artistBio'></h3>
      <div className='captionContainer'>
        <table className='captionTable hideElement'>
        <tbody>
          <tr>
            <td>Title:</td>
            <td id='captionTitle'></td>
          </tr>
          <tr>
            <td id='tableLeftColumn'>Date:</td>
            <td id='captionDate'></td>
          </tr>
          <tr>
            <td>Medium:</td>
            <td id='captionMedium'></td>
          </tr>
          <tr>
            <td>Dimensions:</td>
            <td id='captionDimensions'></td>
          </tr>
          <tr>
            <td>Credit Line:</td>
            <td id='captionCreditLine'></td>
          </tr>
          <tr>
            <td>Collection:</td>
            <td id='captionCollection'></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a id='captionMore' target='_blank' rel='noopener noreferrer'>
                Read More
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

      <div className='buttonContainer'>
        <button className='getArtworkButton' onClick={() => changeApi('Met')}>
          Show me another work
        </button>
        <p id='sendEmailLink'>
          <a id='emailLink'>Email a link to this artwork</a>
        </p>
      </div>
    </div>
  )
}

export default ArtworkCataloging
