const getAicRecord = async () => {
  const randomPage = Math.floor(Math.random() * 999)
  const url = `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=1`
  
  fetch(url)
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .then((artworkRecord) => {
              
      // get artwork image
      const image_id = artworkRecord.data[0].image_id
      const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`

      // delete the existing image
      const imageSection = document.querySelector('.imageContainer')
      imageSection.innerHTML = ''
      
      // save artwork image
      const artworkImage = document.createElement('img')
      artworkImage.src = imageUrl
      imageSection.appendChild(artworkImage)

      // update image modal
      const imageModal = document.querySelector('.imageModal')
      imageModal.innerHTML = ''
      const modalImage = document.createElement('img')
      modalImage.src = imageUrl
      imageModal.appendChild(modalImage)

      // get artwork record details        
      artworkRecord = artworkRecord.data[0]
      console.log('this is the artwork record: ', artworkRecord)

      // remove the start page
      if (document.querySelector('.startScreen') !== null) {
        document.querySelector('.startScreen').remove()
      }

      // show caption table
      document.querySelector('.captionTable').classList.remove('hideElement')

      // update table with artwork data
      document.querySelector('#captionContainer--artistName').innerHTML =
        artworkRecord.artist_title
      document.querySelector('#captionDate').innerHTML =
        artworkRecord.date_display
      document.querySelector('#captionTitle').innerHTML = artworkRecord.title
      document.querySelector('#captionDimensions').innerHTML =
        artworkRecord.dimensions
      document.querySelector('#captionMedium').innerHTML =
        artworkRecord.medium_display
      document.querySelector('#captionCreditLine').innerHTML =
        artworkRecord.credit_line
      document.querySelector('#captionCollection').innerHTML =
        'The Art Institute of Chicago'

      // get artist bio
      let artistBio = artworkRecord.artist_display
      const searchTerm = artworkRecord.artist_title
      const indexOfFirst = artistBio.indexOf(searchTerm)
      artistBio = artistBio.slice(indexOfFirst + searchTerm.length)
      document.querySelector('#captionContainer--artistBio').innerHTML =
      artistBio

      // get link to artwork on AIC website
      const aicPage = `https://www.artic.edu/artworks/${artworkRecord.id}`
      const moreInfoLink = document.querySelector('#captionMore')
      moreInfoLink.href = aicPage
  
      // add support for sharing artwork record by email
      const emailLink = document.querySelector('#emailLink')
      const emailBody = encodeURIComponent(
        `Check out this artwork I found on Docent:\n\n${artworkRecord.title} (${artworkRecord.date_display}) by ${artworkRecord.artist_title}\n${aicPage}\n`
      )
      emailLink.href = `mailto:?body=${emailBody}&subject=Check out this artwork I found on Docent`
    })
}

export default getAicRecord