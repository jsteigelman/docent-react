import GetArtworkButton from './GetArtworkButton'
import DetailsBody from './DetailsBody'

const ArtworkCataloging = ({ changeApi, museum }) => {
  return (
    <div className='containerRight'>
      <div className='captionArtistContainer'>
      <h1 id='captionContainer--artistName'></h1>
      <h3 id='captionContainer--artistBio'></h3>

      <DetailsBody />
      </div>
      <GetArtworkButton changeApi={changeApi} museum={museum} />
    </div>
  )
}

export default ArtworkCataloging
