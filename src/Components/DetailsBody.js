const DetailsBody = () => {
  return (
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
  )
}

export default DetailsBody
