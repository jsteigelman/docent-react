const getAicRecord = async () => {
  const randomPage = Math.floor(Math.random() * 999)
  const test = `https://api.artic.edu/api/v1/artworks?page=${randomPage}&limit=1`
  console.log('The test url is: ', test)
  
  fetch(test)
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
      document.querySelector('#captionContainer--artistBio').innerHTML =
        artworkRecord.artist_display
      const moreInfoLink = document.querySelector('#captionMore')
      moreInfoLink.href = artworkRecord.objectURL
  
      // add support for sharing artwork record by email
      const emailLink = document.querySelector('#emailLink')
      const emailBody = encodeURIComponent(
        `Check out this artwork I found on ArtFlash:\n\n${artworkRecord.title} (${artworkRecord.date_display}) by ${artworkRecord.artist_title}\n${artworkRecord.objectURL}\n`
      )
      emailLink.href = `mailto:?body=${emailBody}&subject=Check out this artwork I found on ArtFlash`
    })
}

export default getAicRecord